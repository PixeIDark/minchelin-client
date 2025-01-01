'use client';

import { signIn } from 'next-auth/react';
import kakaoIcon from '@/assets/icons/kakao.ico';
import Image from 'next/image';
import styles from '@/app/(auth)/components/social-logins/social-logins.styles';
import { useCallbackUrl } from '@/hooks/useCallbackUrl';

// TODO: 모든 소셜 로그인 구현하면 분리.
// TODO: ui로 이미지 버튼 분리
function SocialLogins() {
  const { callbackUrl } = useCallbackUrl();

  return (
    <div className={styles.linksWrapper}>
      <button onClick={() => signIn('kakao', { callbackUrl })}>
        <Image src={kakaoIcon} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={kakaoIcon} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={kakaoIcon} alt='Kakao Login' width={44} height={44} />
      </button>
      <button onClick={() => signIn('kakao', { callbackUrl: '/' })}>
        <Image src={kakaoIcon} alt='Kakao Login' width={44} height={44} />
      </button>
    </div>
  );
}

export default SocialLogins;
