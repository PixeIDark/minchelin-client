import { SignupForm } from '@/app/(auth)/signup/components/signup-form';
import { SocialLogins } from '@/app/(auth)/components/social-logins';
import styles from '@/app/(auth)/signup/signup-page.styles';

function Signup() {
  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>Create your Account</h1>
      <SocialLogins />
      <SignupForm />
    </div>
  );
}

export default Signup;
