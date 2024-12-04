import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { authApi } from '@/api/auth';

export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      // 백엔드 로그아웃
      await authApi.logout();
      // next-auth 세션 종료
      await signOut({ redirect: false });
    },
    onSuccess: () => {
      // React Query 캐시 초기화
      queryClient.clear();
      // 로그인 페이지로 리다이렉트
      router.push('/auth/login');
    },
  });
}
