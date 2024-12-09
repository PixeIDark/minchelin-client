import styles from '@/app/(auth)/login/login-page.styles';
import { LoginForm } from '@/app/(auth)/login/components/login-form';
import { AuthLinks } from '@/app/(auth)/login/components/auth-links';
import { SocialLogins } from '@/app/(auth)/login/components/social-logins';

function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <LoginForm />
      <AuthLinks />
      <SocialLogins />
    </div>
  );
}

export default LoginPage;
