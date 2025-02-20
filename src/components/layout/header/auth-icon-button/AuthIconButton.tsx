'use client';

import { LogIn } from 'lucide-react';
import { css } from '@/styled-system/css';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ProfileSheet } from '@/components/layout/header/auth-icon-button/profile-sheet';

function AuthIconButton() {
  const { data } = useSession();
  if (!data) {
    return (
      <Link href='/login'>
        <LogIn size={40} strokeWidth={1} className={css({ color: 'gray.600' })} />
      </Link>
    );
  }

  return <ProfileSheet userName={data.user.name} />;
}

export default AuthIconButton;
