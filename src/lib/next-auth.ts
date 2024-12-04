import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authApi } from '@/api/auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: '이메일', type: 'email' },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const response = await authApi.login({
            email: credentials.email,
            password: credentials.password,
          });

          return {
            id: response.user.id,
            name: response.user.name,
            email: response.user.email,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
          };
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          }
          throw new Error('알수 없는 에러');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      // 날짜 기준 한국으로 변환
      const expiresDate = new Date(session.expires);
      expiresDate.setHours(expiresDate.getHours() + 9);
      session.expires = expiresDate.toISOString();

      return {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expires: session.expires,
        user: {
          name: session.user.name,
          email: session.user.email,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 60,
  },
  pages: {
    signIn: '/auth-mutation/login',
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
