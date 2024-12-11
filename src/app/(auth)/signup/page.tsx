import { SignupForm } from '@/app/(auth)/signup/components/signup-form';
import { SocialLogins } from '@/app/(auth)/components/social-logins';
import { Divider } from '@/app/(auth)/signup/components/divider';
import styles from '@/app/(auth)/signup/signup-page.styles';

function Signup() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Create your Account</h1>
        <SocialLogins />
        <Divider />
      </div>
      <SignupForm />
    </div>
  );
}

export default Signup;
