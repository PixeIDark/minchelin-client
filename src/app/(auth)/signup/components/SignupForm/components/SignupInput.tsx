import { Form, Input } from 'antd';
import { makeZodValidator } from '@/lib/zod/makeZodValidator';
import { z } from 'zod';

interface SignupInputProps {
  label: string;
  name: 'name' | 'email' | 'password' | 'passwordConfirm';
  schema: z.ZodType<any>;
  placeholder: string;
  isPassword?: boolean;
  dependencies?: string[];
}

function SignupInput({
  label,
  name,
  schema,
  placeholder,
  isPassword,
  dependencies,
}: SignupInputProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      validateFirst
      dependencies={dependencies}
      rules={[
        {
          validator: makeZodValidator(schema),
        },
      ]}
    >
      {isPassword ? (
        <Input.Password placeholder={placeholder} />
      ) : (
        <Input placeholder={placeholder} />
      )}
    </Form.Item>
  );
}

export default SignupInput;
