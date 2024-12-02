'use client';

import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { message } from 'antd';
import { useLogin } from '@/hooks/auth/useLogin';
import { LoginRequest } from '@/types/auth';

export function useLoginSubmit() {
  const router = useRouter();
  const { update, data: session } = useSession();
  const { mutate: login, isPending } = useLogin();

  const handleSubmit = (values: LoginRequest) => {
    login(values, {
      onSuccess: async () => {
        await update();
        // update 갈겼는데 첫 세션은 null 이뜸
        message.success('로그인되었습니다');
        router.push('/');
        console.log(session);
      },
      onError: (error) => {
        if (error instanceof Error) {
          message.error(error.message);
        } else {
          message.error('로그인 중 오류가 발생했습니다');
        }
      },
    });
  };

  return { handleSubmit, isPending };
}
