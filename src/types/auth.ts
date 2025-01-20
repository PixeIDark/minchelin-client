import { User } from './user';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest extends LoginRequest {
  name: string;
  passwordConfirm: string;
}

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse extends TokenResponse {
  id: number;
  email: string;
  name: string;
}
