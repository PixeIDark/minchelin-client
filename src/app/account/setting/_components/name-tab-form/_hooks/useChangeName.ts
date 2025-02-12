import { useToast } from '@/components/ui/toast/useToast';
import { useUpdateProfile } from '@/queries/user/mutations';
import { useForm } from 'react-hook-form';

interface NameFormData {
  name: string;
}

export function useChangeName() {
  const { toast } = useToast();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const nameForm = useForm<NameFormData>({
    defaultValues: {
      name: '',
    },
  });

  const handleNameSubmit = (data: NameFormData) => {
    updateProfile(
      { name: data.name },
      {
        onSuccess: () => {
          toast({
            title: '닉네임 변경 완료',
            description: '닉네임이 성공적으로 변경되었습니다.',
          });
          nameForm.reset();
        },
        onError: (error) => {
          toast({
            title: '닉네임 변경 실패',
            description:
              error instanceof Error ? error.message : '닉네임 변경 중 오류가 발생했습니다.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return { handleNameSubmit, nameForm, isUpdating };
}
