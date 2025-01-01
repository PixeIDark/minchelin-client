'use client';

import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ChevronLeft, Search, X } from 'lucide-react';
import { css } from '@/styled-system/css';
import { useRouter } from 'next/navigation';
import styles from './header.styles';

interface HeaderProps {
  onSearchToggle: () => void;
  isSearchOpen: boolean;
}

function Header({ onSearchToggle, isSearchOpen }: HeaderProps) {
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
        <button onClick={onSearchToggle} className={styles.rightItem}>
          {isSearchOpen ? <X size={36} /> : <Search size={36} />}
        </button>
      </div>
    </div>
  );
}

export default Header;
