import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Control, FieldValues, Path } from 'react-hook-form';

interface TextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  type?: 'text' | 'email';
  placeholder?: string;
  size?: 'sm';
}

function TextField<T extends FieldValues>({
  control,
  name,
  type = 'text',
  placeholder,
  ...props
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default TextField;
