import { useMutation } from '@tanstack/react-query';
import { SignupRequest } from '@/types/auth';
import { authApi } from '@/api/auth';

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupRequest) => authApi.signup(data),
  });
}
