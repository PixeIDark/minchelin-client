'use client';

import { useForm } from 'react-hook-form';
import { SignupFormData } from '@/lib/zod/auth';
import { signupSchema } from '@/lib/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { LoadingButton } from '@/components/common/loading-button';
import styles from './signup-form.styles';
import { useSignupSubmit } from '@/app/(auth)/signup/components/signup-form/useSignupSubmit';
import { Label } from '@/components/ui/label';
import { TextField } from '@/app/(auth)/components/text-field';
import { PasswordField } from '@/app/(auth)/components/password-field';
import TermsCheckbox from '@/app/(auth)/signup/components/signup-form/components/TermsCheckbox';

function SignupForm() {
  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      agreeToTerms: false,
    },
  });
  const { handleSubmit, isPending } = useSignupSubmit();

  return (
    <div>
      <Form {...form}>
        <styled.form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={styles.formWrapper}
          noValidate
        >
          <div>
            <Label>Email</Label>
            <TextField
              control={form.control}
              name='email'
              type='email'
              placeholder='이메일 주소를 입력해주세요'
              size='sm'
            />
          </div>
          <div>
            <Label>PassWord</Label>
            <PasswordField
              control={form.control}
              name='password'
              placeholder='비밀번호를 입력해주세요'
              size='sm'
            />
          </div>
          <div>
            <Label>Re: Password</Label>
            <PasswordField
              control={form.control}
              name='passwordConfirm'
              placeholder='비밀번호를 다시 입력해주세요'
              size='sm'
            />
          </div>
          <div>
            <Label>Nickname</Label>
            <TextField
              control={form.control}
              name='name'
              placeholder='닉네임을 입력해주세요'
              size='sm'
            />
          </div>
          <TermsCheckbox control={form.control} />
          <LoadingButton className={styles.loadingButton} isPending={isPending} size='lg'>
            회원가입
          </LoadingButton>
        </styled.form>
      </Form>
    </div>
  );
}

export default SignupForm;
