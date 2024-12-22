'use client';

import { useRouter } from 'next/navigation';
import { Pencil } from 'lucide-react';
import styles from '@/app/components/floating-button/floating-button.styles';

function FloatingButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/user/recipe/create');
  };

  return (
    <button onClick={handleClick} className={styles.button} aria-label='레시피 작성하기'>
      <Pencil className={styles.icon} />
    </button>
  );
}

export default FloatingButton;
