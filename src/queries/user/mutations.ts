import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/toast/useToast';
import { useRouter } from 'next/navigation';
import { usersApi } from '@/api/users';
import { signOut } from 'next-auth/react';

export function useDeleteAccount() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => usersApi.deleteAccount(),
    onSuccess: async () => {
      await signOut({ redirect: false });
      queryClient.clear();
      toast({
        title: '회원 탈퇴 완료',
        description: '회원 탈퇴가 완료되었습니다.',
      });
      router.replace('/');
    },
    onError: (error) => {
      toast({
        title: '회원 탈퇴 실패',
        description: error instanceof Error ? error.message : '회원 탈퇴 중 오류가 발생했습니다.',
        variant: 'destructive',
      });
    },
  });
}
