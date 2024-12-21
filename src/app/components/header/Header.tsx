'use client';

import { useAuthState } from '@/hooks/useAuthState';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ChevronLeft, UserRound } from 'lucide-react';
import { css } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import styles from './header.styles';

// TODO: root layout 이 아닌 landing 에서 logo 만들자.
function Header() {
  const { isLoggedIn } = useAuthState();
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ChevronLeft
          size={40}
          className={css({ color: 'gray.200' })}
          onClick={() => router.back()}
        />
        <button onClick={() => router.push('/')}>
          <Image src={logo} alt={logo} />
        </button>

        {isLoggedIn ? (
          <div className={styles.userIcon}>
            <UserRound size={36} className={css({ color: 'gray.200' })} />
          </div>
        ) : (
          <div className={css({ width: '40px' })} />
        )}
      </div>
    </div>
  );
}

export default Header;
