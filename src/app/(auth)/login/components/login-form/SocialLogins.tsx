'use client';

import { flex } from '@/styled-system/patterns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

function SocialLogins() {
  return (
    <div className={flex({ gap: '2', mt: '4' })}>
      <Button onClick={() => signIn('kakao', { callbackUrl: '/' })}>카카오로 시작하기</Button>
      <Button asChild>
        <Link href='/user'>네이버</Link>
      </Button>
      {/*<Button>*/}
      {/*  <Link>구글</Link>*/}
      {/*</Button>*/}
      {/*<Button>*/}
      {/*  <Link>깃허브</Link>*/}
      {/*</Button>*/}
    </div>
  );
}

export default SocialLogins;
