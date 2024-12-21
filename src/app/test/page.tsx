'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { center, vstack } from '@/styled-system/patterns';
import { Loader2, ChevronRight, Mail } from 'lucide-react';
import { css, cx } from '@/styled-system/css';
import { useLogout } from '@/queries/auth';

function TestPage() {
  const { theme, toggleTheme } = useToggleTheme();
  const { mutate: logout, isPending } = useLogout();

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

        <Button variant='link'>Link Style</Button>

        <Button variant='outline' size='icon'>
          <ChevronRight
            className={css({
              height: '4',
              width: '4',
            })}
          />
        </Button>

        <Button>
          <Mail />
          Login with Email
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
