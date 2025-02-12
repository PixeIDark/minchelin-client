import { useToast } from '@/components/ui/toast/useToast';
import { useUpdateProfile } from '@/queries/user/mutations';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateSchema } from '@/lib/zod/auth';

interface PasswordFormData {
  password: string;
  passwordConfirm: string;
}

export function useChangePassword() {
  const { toast } = useToast();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  const handlePasswordSubmit = (data: PasswordFormData) => {
    if (data.password !== data.passwordConfirm) {
      toast({
        title: '비밀번호 변경 실패',
        description: '비밀번호가 일치하지 않습니다.',
        variant: 'destructive',
      });
      return;
    }

    updateProfile(
      { password: data.password },
      {
        onSuccess: () => {
          toast({
            title: '비밀번호 변경 완료',
            description: '비밀번호가 성공적으로 변경되었습니다.',
          });
          passwordForm.reset();
        },
        onError: (error) => {
          toast({
            title: '비밀번호 변경 실패',
            description:
              error instanceof Error ? error.message : '비밀번호 변경 중 오류가 발생했습니다.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return { handlePasswordSubmit, passwordForm, isUpdating };
}
