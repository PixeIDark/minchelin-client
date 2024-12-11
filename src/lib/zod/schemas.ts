import { z } from 'zod';

export const emailSchema = z
  .string()
  .min(1, '이메일을 입력해주세요')
  .email('유효한 이메일을 입력해주세요');

export const passwordSchema = z
  .string()
  .min(1, '비밀번호를 입력해주세요')
  .min(8, '비밀번호는 최소 8자 이상이어야 합니다');

export const signupPasswordSchema = passwordSchema
  .regex(/[0-9]/, '숫자를 포함해야 합니다')
  .regex(/[a-zA-Z]/, '영문을 포함해야 합니다');

export const nameSchema = z
  .string()
  .min(2, '닉네임은 2자 이상이어야 합니다')
  .max(20, '닉네임은 20자 이하여야 합니다')
  .regex(/^[a-zA-Z0-9가-힣]+$/, '닉네임은 영문, 숫자, 한글만 사용 가능합니다');

export const agreeToTerms = z.boolean().refine((val) => val, {
  message: '약관에 동의해주세요',
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const signupSchema = z
  .object({
    email: emailSchema,
    password: signupPasswordSchema,
    passwordConfirm: z.string().min(1, '비밀번호 확인을 입력해주세요'),
    name: nameSchema,
    agreeToTerms,
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['passwordConfirm'],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
