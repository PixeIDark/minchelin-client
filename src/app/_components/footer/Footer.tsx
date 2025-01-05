'use client';

import { BookMarked, History, Home, Search } from 'lucide-react';
import styles from './footer.styles';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';

function Footer() {
  const segment = useSelectedLayoutSegment();

  if (segment === '(auth)') return null;

  const iconColor = {
    home: segment === null ? '#304DAD' : undefined,
  };

  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <Home size={28} color={iconColor.home} />
      </Link>
      <Link href='/search'>
        <Search size={28} />
      </Link>
      <Link href='/'>
        <BookMarked size={28} />
      </Link>
      <Link href='/'>
        <History size={28} />
      </Link>
    </div>
  );
}

export default Footer;
