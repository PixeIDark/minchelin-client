import { AuthResponse, LoginRequest, SignupRequest, TokenResponse } from '@/types/auth';
import { fetchInstance } from './instance';
import { signIn } from 'next-auth/react';

export const authApi = {
  login: (data: LoginRequest) => fetchInstance.post<AuthResponse>('/auth/login', data),

  signup: (data: SignupRequest) => fetchInstance.post<AuthResponse>('/auth/signup', data),

  logout: () => fetchInstance.post<{ message: string }>('/auth/logout'),

  refresh: async (refreshToken: string): Promise<TokenResponse> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await response.json();

      if (data.accessToken && data.refreshToken) {
        await signIn('credentials', {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          redirect: false,
        });
        return data;
      }
      throw new Error('토큰 갱신 실패');
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  },
};
