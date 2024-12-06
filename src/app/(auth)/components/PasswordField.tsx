import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Control, FieldValues, Path } from 'react-hook-form';
import { styled } from '@/styled-system/jsx';

interface PasswordFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
}

function PasswordField<T extends FieldValues>({
  control,
  name,
  placeholder,
}: PasswordFieldProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <styled.div position='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder={placeholder}
                {...field}
              />
              <Button
                type='button'
                variant='passwordToggle'
                size='icon'
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </Button>
            </styled.div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default PasswordField;
