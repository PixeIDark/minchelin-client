import { AuthResponse } from '@/types/auth';
import { fetchInstance } from './instance';

interface KakaoLoginRequest {
  accessToken: string;
}

export const oauthApi = {
  kakaoLogin: (data: KakaoLoginRequest) =>
    fetchInstance.post<AuthResponse>('/oauth/callback/kakao', data),
};
