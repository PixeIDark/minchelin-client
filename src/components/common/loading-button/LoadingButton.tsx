import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React, { ButtonHTMLAttributes } from 'react';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface LoadingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isPending: boolean;
  size?: 'default' | 'sm' | 'm' | 'lg' | 'icon';
  asChild?: boolean;
}

function LoadingButton({ children, isPending, size = 'default', ...props }: LoadingButtonProps) {
  return (
    <Button disabled={isPending} {...props} size={size}>
      {!isPending ? (
        children
      ) : (
        <div className={flex({ alignItems: 'center', gap: '2' })}>
          <Loader2 className={css({ animation: 'spin' })} />
          <p>잠시만 기다려주세요</p>
        </div>
      )}
    </Button>
  );
}

export default LoadingButton;
