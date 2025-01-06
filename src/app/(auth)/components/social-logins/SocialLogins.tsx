'use client';

import { useCallbackUrl } from '@/hooks/useCallbackUrl';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { PUBLIC } from '@/constants/public';
import styles from '@/app/(auth)/components/social-logins/social-logins.styles';

// TODO: 모든 소셜 로그인 구현하면 분리.
// TODO: ui로 이미지 버튼 분리
function SocialLogins() {
  const { callbackUrl } = useCallbackUrl();

  return (
    <div className={styles.linksWrapper}>
      <button onClick={() => signIn('kakao', { callbackUrl })}>
        <Image src={PUBLIC.icons.social.kakao} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={PUBLIC.icons.social.kakao} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={PUBLIC.icons.social.kakao} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={PUBLIC.icons.social.kakao} alt='Kakao Login' width={44} height={44} />
      </button>
    </div>
  );
}

export default SocialLogins;
