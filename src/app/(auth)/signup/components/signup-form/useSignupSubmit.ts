'use client';

import { SignupRequest } from '@/types/auth';
import { useToast } from '@/components/ui/toast/useToast';
import { useRouter } from 'next/navigation';
import { useSignup } from '@/queries/auth';

export function useSignupSubmit() {
  const { toast } = useToast();
  const router = useRouter();
  const { mutate: signup, isPending } = useSignup();

  const handleSubmit = (values: SignupRequest) => {
    signup(values, {
      onSuccess: () => {
        toast({
          title: '회원가입 성공',
          description: '회원가입이 완료되었습니다',
          variant: 'default',
        });
        router.push('/login');
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: '회원가입 실패',
            description: error.message,
            variant: 'destructive',
          });
        } else {
          toast({
            title: '회원가입 실패',
            description: '회원가입 중 오류가 발생했습니다',
            variant: 'destructive',
          });
        }
      },
    });
  };

  return { handleSubmit, isPending };
}
