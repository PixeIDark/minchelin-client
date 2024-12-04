'use client';

import { Form } from 'antd';
import { LoginFormData, loginSchema } from '@/lib/zod/schemas';
import { useLoginSubmit } from '@/app/(auth)/login/useLoginSubmit';
import LoginInput from '@/app/(auth)/login/components/LoginForm/components/LoginInput';
import FormButton from '@/app/(auth)/components/FormButton';

function LoginForm() {
  const [form] = Form.useForm<LoginFormData>();
  const { handleSubmit } = useLoginSubmit();

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmit}
      className='bg-white p-8 rounded-lg shadow-md'
    >
      <h1 className='text-2xl font-bold text-center mb-6'>로그인</h1>
      <LoginInput
        label='이메일'
        name='email'
        schema={loginSchema.shape.email}
        placeholder='이메일 주소를 입력하세요'
      />
      <LoginInput
        label='비밀번호'
        name='password'
        schema={loginSchema.shape.password}
        placeholder='비밀번호를 입력하세요'
        type='password'
      />
      <FormButton />
    </Form>
  );
}

export default LoginForm;
