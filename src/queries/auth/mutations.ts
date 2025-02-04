import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/api/auth';
import { LoginRequest, SignupRequest } from '@/types/auth';
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

export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupRequest) => authApi.signup(data),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      await authApi.logout();
      await signOut({ redirect: false });
    },
    onSuccess: () => {
      queryClient.clear();
      router.push('/login');
    },
  });
}
