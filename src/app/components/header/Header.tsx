'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ChevronLeft, Search } from 'lucide-react';
import { css } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import styles from './header.styles';

// TODO: root layout 이 아닌 landing 에서 logo 만들자.
function Header() {
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
        <Search size={36} className={styles.searchIcon} />
      </div>
    </div>
  );
}

export default Header;
