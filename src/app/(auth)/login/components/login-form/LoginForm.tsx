'use client';

import { useForm } from 'react-hook-form';
import { LoginRequest } from '@/types/auth';
import { loginSchema } from '@/lib/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginSubmit } from '@/app/(auth)/login/components/login-form/useLoginSubmit';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import TextField from '@/app/(auth)/components/TextField';
import PasswordField from '@/app/(auth)/components/PasswordField';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import { LoadingButton } from '@/components/common/loading-button';
import { AuthSecondaryLinks } from '@/app/(auth)/login/components/login-form';

function LoginForm() {
  const form = useForm<LoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit, isPending } = useLoginSubmit();

  return (
    <Form {...form}>
      <styled.form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={flex({ flexDir: 'column', gap: '4', maxW: '460', mx: 'auto', mt: '40' })}
        noValidate
      >
        <TextField
          control={form.control}
          name='email'
          type='email'
          placeholder='이메일 주소를 입력해주세요'
        />
        <PasswordField
          control={form.control}
          name='password'
          placeholder='비밀번호를 입력해주세요'
        />
        <LoadingButton
          className={css({ w: 'full', mt: '2' })}
          text='로그인'
          isPending={isPending}
        />
        <AuthSecondaryLinks />
      </styled.form>
    </Form>
  );
}

export default LoginForm;
