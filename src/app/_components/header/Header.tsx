'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ChevronLeft } from 'lucide-react';
import { css } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import styles from './header.styles';
import { AuthIconButton } from '@/app/_components/header/auth-icon-button';

function Header() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button onClick={() => router.back()}>
          <ChevronLeft size={40} className={css({ color: 'gray.200' })} />
        </button>
        <button onClick={() => router.push('/')}>
          <Image src={logo} alt={logo} />
        </button>
        <AuthIconButton />
      </div>
    </div>
  );
}

export default Header;
