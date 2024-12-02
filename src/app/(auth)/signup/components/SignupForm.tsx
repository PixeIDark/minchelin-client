'use client';

import { Form, Input, Button, Card, Space } from 'antd';
import {
  emailSchema,
  nameSchema,
  SignupFormData,
  signupPasswordSchema,
  signupSchema,
} from '@/lib/auth-schemas';
import { useSignupSubmit } from '@/app/(auth)/signup/useSignupSubmit';

function SignupForm() {
  const [form] = Form.useForm<SignupFormData>();
  const { handleSubmit, isPending } = useSignupSubmit();

  return (
    <Card>
      <Form form={form} layout='vertical' onFinish={handleSubmit}>
        <Space direction='vertical' size='large' className='w-full'>
          <h2 className='text-xl font-semibold'>계정 만들기</h2>

          <Form.Item
            label='닉네임'
            name='name'
            validateFirst
            rules={[
              {
                validator: async (_, value) => {
                  try {
                    await nameSchema.parseAsync(value);
                  } catch (error) {
                    return Promise.reject(error.errors?.[0]);
                  }
                },
              },
            ]}
          >
            <Input placeholder='사용하실 닉네임을 입력해주세요' />
          </Form.Item>

          <Form.Item
            label='이메일'
            name='email'
            validateFirst
            rules={[
              {
                validator: async (_, value) => {
                  try {
                    await emailSchema.parseAsync(value);
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
                    await signupPasswordSchema.parseAsync(value);
                  } catch (error) {
                    return Promise.reject(error.errors?.[0]);
                  }
                },
              },
            ]}
          >
            <Input.Password placeholder='비밀번호를 입력하세요' />
          </Form.Item>

          <Form.Item
            label='비밀번호 확인'
            name='passwordConfirm'
            dependencies={['password']}
            validateFirst
            rules={[
              {
                validator: async (_, value) => {
                  try {
                    // 먼저 비밀번호 확인 필드 자체 검증
                    if (!value) {
                      throw new Error('비밀번호 확인을 입력해주세요');
                    }

                    // 전체 폼 데이터로 비밀번호 일치 여부 검증
                    const formData = form.getFieldsValue();
                    await signupSchema.parseAsync(formData);
                  } catch (error) {
                    return Promise.reject(error.errors?.[0]);
                  }
                },
              },
            ]}
          >
            <Input.Password placeholder='비밀번호를 다시 입력하세요' />
          </Form.Item>

          <Button type='primary' htmlType='submit' loading={isPending} block>
            가입하기
          </Button>
        </Space>
      </Form>
    </Card>
  );
}

export default SignupForm;
