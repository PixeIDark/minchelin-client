import { fetchInstance } from './instance';
import { AuthResponse } from '@/types/auth';
import { KakaoUser } from '@/types/oauth';

export const oauthApi = {
  saveKakaoUser: (data: KakaoUser) => fetchInstance.post<AuthResponse>('/oauth/kakao/user', data),
};
