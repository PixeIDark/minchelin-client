'use client';

import { CircleUserRound, LogIn } from 'lucide-react';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function AuthIconButton() {
  const { data } = useSession();

  if (!data) {
    return (
      <Link href='/login'>
        <LogIn size={40} className={css({ color: 'gray.200' })} />
      </Link>
    );
  }

  return (
    <button>
      <CircleUserRound size={40} className={css({ color: 'gray.200' })} />
    </button>
  );
}

export default AuthIconButton;
