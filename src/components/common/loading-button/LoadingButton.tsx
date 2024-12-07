import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isPending: boolean;
}

function LoadingButton({ text, isPending, ...props }: LoadingButtonProps) {
  return (
    <Button disabled={isPending} {...props}>
      {!isPending ? (
        text
      ) : (
        <div className={flex({ alignItems: 'center', gap: '2' })}>
          <Loader2 className={css({ animation: 'spin' })} />
          <p>Please Wait</p>
        </div>
      )}
    </Button>
  );
}

export default LoadingButton;
