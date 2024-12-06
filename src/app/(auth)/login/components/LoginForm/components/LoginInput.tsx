import { z } from 'zod';
import { Form, Input } from 'antd';
import { makeZodValidator } from '@/lib/zod/makeZodValidator';
import { input } from '@/styled-system/recipes';

interface FormInputProps {
  name: string;
  schema: z.ZodType<any>;
  placeholder: string;
  type?: 'text' | 'password';
}

function LoginInput({ name, schema, placeholder, type = 'text' }: FormInputProps) {
  const a = {
    width: '120px',
    backgroundColor: 'red',
  };

  return (
    <Form.Item
      name={name}
      validateFirst
      rules={[
        {
          validator: makeZodValidator(schema),
        },
      ]}
    >
      {type === 'password' ? (
        <Input.Password placeholder={placeholder} className={input()} />
      ) : (
        <Input placeholder={placeholder} size='large' />
      )}
    </Form.Item>
  );
}

export default LoginInput;
