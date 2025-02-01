'use client';

import { useLogout } from '@/queries/auth';
import { LoadingButton } from '@/components/common/loading-button';
import { css } from '@/styled-system/css';
import { Button } from '@/components/ui/button';
import styles from './setting.styles';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { TextField } from '@/app/(auth)/components/text-field';
import { PasswordField } from '@/app/(auth)/components/password-field';
import { useForm } from 'react-hook-form';
import { UpdateFormData, updateSchema } from '@/lib/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDeleteAccount } from '@/queries/user/mutation';

function SettingPage() {
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const form = useForm<UpdateFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      name: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const { mutate: deleteAccount, isPending: isDeleteAccount } = useDeleteAccount();

  const handleSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>계정 설정</h1>
      <Form {...form}>
        <styled.form onSubmit={form.handleSubmit(handleSubmit)} noValidate>
          <TextField
            control={form.control}
            name='name'
            type='text'
            placeholder='이메일 주소를 입력해주세요'
          />
          <PasswordField
            control={form.control}
            name='password'
            placeholder='비밀번호를 입력해주세요'
          />
          <PasswordField
            control={form.control}
            name='passwordConfirm'
            placeholder='비밀번호를 다시 입력해주세요'
            size='sm'
          />
          <Button size='lg' className={css({ w: 'full' })}>
            변경
          </Button>
        </styled.form>
      </Form>
      <div className={styles.buttonGroup}>
        <LoadingButton
          onClick={() => deleteAccount()}
          className={css({ w: 'full' })}
          variant='destructive'
          isPending={isDeleteAccount}
        >
          회원 탈퇴
        </LoadingButton>
        <LoadingButton
          onClick={() => logout()}
          isPending={isLoggingOut}
          className={css({ w: 'full' })}
        >
          로그아웃
        </LoadingButton>
      </div>
    </div>
  );
}

export default SettingPage;
