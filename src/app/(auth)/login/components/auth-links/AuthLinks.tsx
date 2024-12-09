import Link from 'next/link';
import styles from '@/app/(auth)/login/components/auth-links/auth-links.styles';

function AuthLinks() {
  return (
    <div className={styles.secondaryLinks}>
      <Link href='./signup'>회원가입</Link>
      <Link href='/'>ID 찾기</Link>
      <Link href='/'>비밀번호 찾기</Link>
    </div>
  );
}

export default AuthLinks;
