'use client';

import { Form, Input, Button } from 'antd';
import { LoginFormData, loginSchema } from '@/lib/auth-schemas';
import { useLoginSubmit } from '@/app/(auth)/login/useLoginSubmit';

function LoginForm() {
  const [form] = Form.useForm<LoginFormData>();
  const { handleSubmit, isPending } = useLoginSubmit();

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleSubmit}
      className='bg-white p-8 rounded-lg shadow-md'
    >
      <h1 className='text-2xl font-bold text-center mb-6'>로그인</h1>
      <Form.Item
        label='이메일'
        name='email'
        validateFirst
        rules={[
          {
            validator: async (_, value) => {
              try {
                await loginSchema.shape.email.parseAsync(value);
              } catch (error) {
                return Promise.reject(error.errors?.[0]);
              }
            },
          },
        ]}
      >
        <Input placeholder='이메일 주소를 입력하세요' />
      </Form.Item>
      <Form.Item
        label='비밀번호'
        name='password'
        validateFirst
        rules={[
          {
            validator: async (_, value) => {
              try {
                await loginSchema.shape.password.parseAsync(value);
              } catch (error) {
                return Promise.reject(error.errors?.[0]);
              }
            },
          },
        ]}
      >
        <Input.Password placeholder='비밀번호를 입력하세요' />
      </Form.Item>
      <Button type='primary' htmlType='submit' loading={isPending} className='w-full'>
        로그인
      </Button>
    </Form>
  );
}

export default LoginForm;
