'use client';

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Control } from 'react-hook-form';
import { SignupFormData } from '@/lib/zod/auth';

interface TermsCheckboxProps {
  control: Control<SignupFormData>;
}

function TermsCheckbox({ control }: TermsCheckboxProps) {
  return (
    <FormField
      control={control}
      name='agreeToTerms'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Checkbox id='terms' checked={field.value} onCheckedChange={field.onChange}>
              <label htmlFor='terms'>약관에 동의합니다</label>
            </Checkbox>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TermsCheckbox;
