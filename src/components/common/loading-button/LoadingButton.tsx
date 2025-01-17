import { Button } from '@/components/ui/button';
import React, { ButtonHTMLAttributes } from 'react';
import { LoadingSpinner } from '@/components/common/loading-spinner';

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
        <LoadingSpinner isLoading={true}>잠시만 기다려 주세요</LoadingSpinner>
      )}
    </Button>
  );
}

export default LoadingButton;
