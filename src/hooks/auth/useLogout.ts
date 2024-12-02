import { useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '@/api/auth';

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // 로그아웃 시 캐시된 데이터 초기화
      queryClient.clear();
    },
  });
}
