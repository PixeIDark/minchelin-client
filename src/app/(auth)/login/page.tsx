'use client';

import { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다'),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onSubmit = async (values: LoginFormData) => {
    setLoading(true);
    try {
      const result = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: '/',
      });

      if (result?.error) {
        message.error(result.error);
        return;
      }

      if (result?.ok) {
        console.log(session);
      }
    } catch (error) {
      message.error('로그인 중 오류가 발생했습니다');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md'>
        <Form
          form={form}
          layout='vertical'
          className='bg-white p-8 rounded-lg shadow-md'
          onFinish={onSubmit}
        >
          <h1 className='text-2xl font-bold text-center mb-6'>로그인</h1>
          <Form.Item
            label='이메일'
            name='email'
            rules={[
              { required: true, message: '이메일을 입력해주세요' },
              { type: 'email', message: '유효한 이메일을 입력해주세요' },
            ]}
          >
            <Input placeholder='이메일 주소를 입력하세요' />
          </Form.Item>
          <Form.Item
            label='비밀번호'
            name='password'
            rules={[
              { required: true, message: '비밀번호를 입력해주세요' },
              { min: 8, message: '비밀번호는 최소 8자 이상이어야 합니다' },
            ]}
          >
            <Input.Password placeholder='비밀번호를 입력하세요' />
          </Form.Item>
          <Button type='primary' htmlType='submit' loading={loading} className='w-full'>
            로그인
          </Button>
        </Form>
      </div>
    </div>
  );
}
