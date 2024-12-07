import { flex } from '@/styled-system/patterns';
import Link from 'next/link';

function AuthSecondaryLinks() {
  return (
    <div className={flex({ gap: '3', color: 'blue_a' })}>
      <Link href='./signup'>회원가입</Link>
      <Link href='/'>ID 찾기</Link>
      <Link href='/'>비밀번호 찾기</Link>
    </div>
  );
}

export default AuthSecondaryLinks;
