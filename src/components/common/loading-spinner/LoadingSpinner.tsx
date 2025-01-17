import { Loader2 } from 'lucide-react';
import { styles } from './loading-spinner.styles';
import React from 'react';

interface LoadingSpinnerProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

function LoadingSpinner({ isLoading, children = '로딩중...' }: LoadingSpinnerProps) {
  if (!isLoading) return null;

  return (
    <div className={styles.wrapper}>
      <Loader2 className={styles.spinner} />
      {children}
    </div>
  );
}

export default LoadingSpinner;
