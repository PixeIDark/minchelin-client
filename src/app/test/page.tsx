'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { center, vstack } from '@/styled-system/patterns';
import { Loader2, ChevronRight, Mail } from 'lucide-react';
import { css, cx } from '@/styled-system/css';
import { useLogout } from '@/queries/auth';
import { authApi } from '@/api/auth';
import { useSession } from 'next-auth/react';
import { usersApi } from '@/api/users';

function TestPage() {
  const { theme, toggleTheme } = useToggleTheme();
  const { mutate: logout, isPending } = useLogout();
  const { data } = useSession();

  const re = async () => {
    const refresh = data?.refreshToken;
    if (!refresh) return;
    const a = await authApi.refresh(refresh);
  };

  const showProfile = async () => {
    const profile = await usersApi.getMyProfile();

    console.log(profile);
  };

  return (
    <div className={center({ height: '100vh' })}>
      <div className={vstack({ gap: '4' })}>
        <Button onClick={toggleTheme}>{theme === 'light' ? '🌙 Dark' : '☀️ Light'}</Button>

        <Button asChild>
          <Link href='/login'>./login</Link>
        </Button>

        <Button variant='secondary' asChild>
          <Link href='/user'>./user</Link>
        </Button>

        <Button variant='ghost' asChild>
          <Link href='/signup'>./signup</Link>
        </Button>

        <Button variant='outline' asChild>
          <Link href='/map'>./map</Link>
        </Button>

        <Button variant='destructive' onClick={() => logout()} disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className={cx(css({ animation: 'spin' }))} />
              로그아웃 중...
            </>
          ) : (
            '로그아웃'
          )}
        </Button>

        <Button variant='link' onClick={showProfile}>
          내 프로필 확인
        </Button>

        <Button variant='outline' size='icon'>
          <ChevronRight
            className={css({
              height: '4',
              width: '4',
            })}
          />
        </Button>

        <Button onClick={re}>
          <Mail />
          토큰 재발급
        </Button>

        <Button asChild>
          <Link href='#'>Link Button</Link>
        </Button>

        <Button disabled>
          <Loader2 className={cx(css({ animation: 'spin' }))} />
          Please wait
        </Button>
      </div>
    </div>
  );
}

export default TestPage;
