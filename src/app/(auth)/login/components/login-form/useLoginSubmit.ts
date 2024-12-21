'use client';

import { useSession } from 'next-auth/react';
import { LoginRequest } from '@/types/auth';
import { useToast } from '@/components/ui/toast/useToast';
import { useLogin } from '@/queries/auth';

export function useLoginSubmit() {
  const { toast } = useToast();
  const { update, data: session } = useSession();
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (values: LoginRequest) => {
    login(values, {
      onSuccess: async () => {
        await update();
        // TODO: update 이후 첫 세션이 null인 것은 알려진 이슈이므로 무시
        toast({
          title: '로그인 성공',
          description: '로그인되었습니다',
          variant: 'default',
        });
        console.log(session); // TODO: console.log
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: '로그인 실패',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          toast({
            title: '로그인 실패',
            description: '로그인 중 오류가 발생했습니다',
            variant: 'destructive',
          });
        }
      },
    });
  };

  return { handleSubmit, isPending };
}
