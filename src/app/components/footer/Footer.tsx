import { Atom, BookMarked, Home, Search, Settings } from 'lucide-react';
import { css } from '@/styled-system/css';

function Footer() {
  return (
    <div
      className={css({
        alignItems: 'center',
        height: '16',
        mx: '-4',
        px: '4',
        display: { base: 'flex', md: 'none' },
        justifyContent: 'space-between',
        borderTop: '1px solid',
        borderColor: 'gray.200',
        position: 'fixed',
        bottom: '0',
        w: 'full',
      })}
    >
      <button>
        <Home size={28} />
      </button>
      <button>
        <Search size={28} />{' '}
      </button>
      <button>
        <BookMarked size={28} />{' '}
      </button>
      <button>
        <Atom size={28} />{' '}
      </button>
      <button>
        <Settings size={28} />{' '}
      </button>
    </div>
  );
}

export default Footer;
