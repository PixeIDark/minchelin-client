import { useMutation } from '@tanstack/react-query';
import { LoginRequest } from '@/types/auth';
import { authApi } from '@/api/auth';
import { signIn } from 'next-auth/react';
import { useCallbackUrl } from '@/hooks/useCallbackUrl';

export function useLogin() {
  const { callbackUrl } = useCallbackUrl();

  return useMutation({
    mutationFn: async (credentials: LoginRequest) => {
      const response = await authApi.login(credentials);

      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        callbackUrl: callbackUrl,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return response;
    },
  });
}
