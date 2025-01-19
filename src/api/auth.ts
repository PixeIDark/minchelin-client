import { AuthResponse, LoginRequest, SignupRequest, TokenResponse } from '@/types/auth';
import { fetchInstance } from './instance';

export const authApi = {
  login: (data: LoginRequest) => fetchInstance.post<AuthResponse>('/auth/login', data),

  signup: (data: SignupRequest) => fetchInstance.post<AuthResponse>('/auth/signup', data),

  logout: () => fetchInstance.post<{ message: string }>('/auth/logout'),

  refresh: (refreshToken: string) =>
    fetchInstance.post<TokenResponse>('/auth/refresh', { refreshToken }),
};
