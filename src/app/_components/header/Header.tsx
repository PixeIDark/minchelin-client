'use client';

import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { AuthIconButton } from '@/app/_components/header/auth-icon-button';
import { css } from '@/styled-system/css';
import { PUBLIC } from '@/constants/public';
import styles from './header.styles';

function Header() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button onClick={() => router.back()}>
          <ChevronLeft size={40} className={css({ color: 'gray.600' })} />
        </button>
        <button onClick={() => router.push('/')}>
          <Image src={PUBLIC.images.logo} alt='logo' width={105} height={1} priority />
        </button>
        <AuthIconButton />
      </div>
    </div>
  );
}

export default Header;
