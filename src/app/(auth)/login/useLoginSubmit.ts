'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { message } from 'antd';
import { useLogin } from '@/hooks/auth-mutation/useLogin';
import { LoginRequest } from '@/types/auth';

export function useLoginSubmit() {
  const router = useRouter();
  const { update, data: session } = useSession();
  const { mutate: login, isPending } = useLogin();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const handleSubmit = (values: LoginRequest) => {
    login(values, {
      onSuccess: async () => {
        await update();
        // update 갈겼는데 첫 세션은 null 이뜸 안뜨게 하는 방법들 다 메롱이라 걍 해라..
        message.success('로그인되었습니다');
        router.push(callbackUrl || '/');
        console.log(session); // TODO: 삭제 필요.
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
