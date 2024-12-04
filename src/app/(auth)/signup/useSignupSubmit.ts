import { useRouter } from 'next/navigation';
import { useSignup } from '@/hooks/auth-mutation/useSignup';
import { SignupRequest } from '@/types/auth';
import { message } from 'antd';

export function useSignupSubmit() {
  const router = useRouter();
  const { mutate: signup, isPending } = useSignup();

  const handleSubmit = (values: SignupRequest) => {
    signup(values, {
      onSuccess: () => {
        message.success('회원가입이 완료되었습니다');
        router.push('/auth/login');
      },
      onError: (error) => {
        message.error(error instanceof Error ? error.message : '회원가입 중 오류가 발생했습니다');
      },
    });
  };

  return { handleSubmit, isPending };
}
