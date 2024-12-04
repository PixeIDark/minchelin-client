import { z } from 'zod';
import { FormRule } from 'antd';

export const makeZodValidator = (schema: z.ZodType<any, any>) => {
  return async (_: FormRule, value: string) => {
    try {
      await schema.parseAsync(value);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw error.errors[0].message;
      }
      throw new Error('Validation failed');
    }
  };
};
