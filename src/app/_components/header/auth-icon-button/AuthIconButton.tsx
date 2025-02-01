'use client';

import { CircleUserRound, LogIn } from 'lucide-react';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { ProfileMenu } from '@/app/_components/header/auth-icon-button/profile-menu';

function AuthIconButton() {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  if (!data) {
    return (
      <Link href='/login'>
        <LogIn size={40} strokeWidth={1} className={css({ color: 'gray.600' })} />
      </Link>
    );
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <CircleUserRound size={40} strokeWidth={1} className={css({ color: 'blue.600' })} />
      </button>
      <ProfileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

export default AuthIconButton;
