'use client';

import { flex } from '@/styled-system/patterns';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

function SocialLogins() {
  return (
    <div className={flex({ gap: '2', mt: '4' })}>
      <button
        onClick={() =>
          signIn('kakao', {
            callbackUrl: '/',
            redirect: true,
          })
        }
      >
        카카오
      </button>
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
