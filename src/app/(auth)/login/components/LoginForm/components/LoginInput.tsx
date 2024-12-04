import { z } from 'zod';
import { Form, Input } from 'antd';
import { makeZodValidator } from '@/lib/zod/makeZodValidator';

interface FormInputProps {
  label: string;
  name: string;
  schema: z.ZodType<any>;
  placeholder: string;
  type?: 'text' | 'password';
}

function LoginInput({ label, name, schema, placeholder, type = 'text' }: FormInputProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      validateFirst
      rules={[
        {
          validator: makeZodValidator(schema),
        },
      ]}
    >
      {type === 'password' ? (
        <Input.Password placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
    </Form.Item>
  );
}

export default LoginInput;
