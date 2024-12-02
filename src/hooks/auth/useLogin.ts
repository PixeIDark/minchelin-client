import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from '@/types/auth';
import { authApi } from '@/api/auth';
import { signIn } from 'next-auth/react';

export function useLogin() {
  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await authApi.login(credentials);

      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return response;
    },
  });
}
