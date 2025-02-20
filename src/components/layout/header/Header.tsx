'use client';

import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { css } from '@/styled-system/css';
import { PUBLIC } from '@/constants/public';
import styles from './header.styles';
import { AuthIconButton } from '@/components/layout/header/auth-icon-button';

function Header() {
  const router = useRouter();

  return (
    <div>
      <div className={styles.headerSpacer} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <button onClick={() => router.back()}>
            <ChevronLeft size={40} strokeWidth={1} className={css({ color: 'gray.600' })} />
          </button>
          <button onClick={() => router.push('/')}>
            <Image src={PUBLIC.images.logo} alt='logo' width={105} height={1} priority />
          </button>
          <AuthIconButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
