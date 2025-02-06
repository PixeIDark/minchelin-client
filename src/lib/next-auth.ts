import { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authApi } from '@/api/auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { oauthApi } from '@/api/oauth';
import { usersApi } from '@/api/users';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '비밀번호', type: 'password' },
        accessToken: { type: 'text' },
        refreshToken: { type: 'text' },
      },
      async authorize(credentials) {
        if (credentials?.accessToken && credentials?.refreshToken) {
          const userData = await usersApi.getMyProfile();

          return {
            user: {
              id: userData.id,
              name: userData.name,
              email: userData.email,
            },
            accessToken: credentials.accessToken,
            refreshToken: credentials.refreshToken,
          } as User;
        }

        if (!credentials?.email || !credentials?.password) return null;

        try {
          return (await authApi.login({
            email: credentials.email,
            password: credentials.password,
          })) as User;
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error('알수 없는 에러');
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'kakao') {
        try {
          const response = await oauthApi.saveKakaoUser({
            providerAccountId: account.providerAccountId,
            name: user.name || '',
            accessToken: account.access_token!,
            refreshToken: account.refresh_token!,
          });

          user.user = {
            id: response.user.id,
            name: response.user.name,
            email: response.user.email,
          };
          user.accessToken = response.accessToken;
          user.refreshToken = response.refreshToken;

          return true;
        } catch (error) {
          console.error('Failed to save kakao user:', error);
          return false;
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user.user;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },

    async session({ session, token }) {
      const expiresDate = new Date(session.expires);
      expiresDate.setHours(expiresDate.getHours() + 9);

      return {
        user: token.user,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expires: expiresDate.toISOString(),
      };
    },
  },

  pages: {
    signIn: '/login',
  },

  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60,
  },

  secret: process.env.NEXTAUTH_SECRET,
  // cookies: { 세션 영구히 쿠키에 저장하는 NextAuth의 고유 기능.
  //   sessionToken: {
  //     name: `next-auth-mutation.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: 'lax',
  //       path: '/',
  //       secure: process.env.NODE_ENV === 'production',
  //       maxAge: 30 * 24 * 60 * 60 // 30일
  //     }
  //   }
  // }
};
