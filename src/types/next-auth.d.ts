import 'next-auth';

interface UserInfo {
  id: number;
  email: string;
  name: string;
}

declare module 'next-auth' {
  interface Session {
    user: UserInfo;
    accessToken?: string;
    refreshToken?: string;
    expires: string;
  }

  interface User {
    user: UserInfo;
    accessToken: string;
    refreshToken: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: UserInfo;
    accessToken?: string;
    refreshToken?: string;
  }
}
