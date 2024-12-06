'use client';

import { useForm } from 'react-hook-form';
import { LoginRequest } from '@/types/auth';
import { loginSchema } from '@/lib/zod/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginSubmit } from '@/app/(auth)/login/components/LoginForm/useLoginSubmit';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { Button } from '@/components/ui/button';
import TextField from '@/app/(auth)/components/TextField';
import PasswordField from '@/app/(auth)/components/PasswordField';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import Link from 'next/link';
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
        <Button className={css({ w: 'full', mt: '2' })} type='submit' disabled={isPending}>
          {isPending ? '로그인 중...' : '로그인'}
        </Button>
        <div className={flex({ gap: '3', color: 'blue_a' })}>
          <Link href='./signup'>회원가입</Link>
          <Link href='/'>ID찾기</Link>
          <Link href='/'>비밀번호 찾기</Link>
        </div>
      </styled.form>
    </Form>
  );
}

export default LoginForm;
