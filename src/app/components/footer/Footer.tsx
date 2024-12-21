'use client';

import { Atom, BookMarked, Home, Search, Settings } from 'lucide-react';
import styles from './footer.styles';
import { useSelectedLayoutSegment } from 'next/navigation';

function Footer() {
  const segment = useSelectedLayoutSegment();

  if (segment === '(auth)') return null;

  const iconColor = {
    home: segment === null ? '#304DAD' : undefined,
  };

  return (
    <div className={styles.wrapper}>
      <button>
        <Home size={28} color={iconColor.home} />
      </button>
      <button>
        <Search size={28} />
      </button>
      <button>
        <BookMarked size={28} />
      </button>
      <button>
        <Atom size={28} />
      </button>
      <button>
        <Settings size={28} />
      </button>
    </div>
  );
}

export default Footer;
