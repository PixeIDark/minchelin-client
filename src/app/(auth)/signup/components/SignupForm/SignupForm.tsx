'use client';

import { Form, Card, Space } from 'antd';
import { emailSchema, nameSchema, passwordSchema, SignupFormData } from '@/lib/zod/schemas';
import { useSignupSubmit } from '@/app/(auth)/signup/useSignupSubmit';
import SignupInput from '@/app/(auth)/signup/components/SignupForm/components/SignupInput';
import FormButton from '@/app/(auth)/components/FormButton';

function SignupForm() {
  const [form] = Form.useForm<SignupFormData>();
  const { handleSubmit } = useSignupSubmit();

  return (
    <Card>
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Space direction='vertical' size='large' className='w-full'>
          <h2 className='text-xl font-semibold'>계정 만들기</h2>
          <SignupInput
            label='닉네임'
            name='name'
            schema={nameSchema}
            placeholder='사용하실 닉네임을 입력해주세요'
          />
          <SignupInput
            label='이메일'
            name='email'
            schema={emailSchema}
            placeholder='이메일 주소를 입력하세요'
          />
          <SignupInput
            label='비밀번호'
            name='password'
            schema={passwordSchema}
            placeholder='비밀번호를 입력하세요'
            isPassword
          />
          <SignupInput
            label='비밀번호 확인'
            name='passwordConfirm'
            schema={passwordSchema}
            placeholder='비밀번호를 다시 입력하세요'
            isPassword
            dependencies={['password']}
          />
          <FormButton />
        </Space>
      </Form>
    </Card>
  );
}

export default SignupForm;
