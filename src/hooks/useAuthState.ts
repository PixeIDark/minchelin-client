import { useAuthRecovery } from '@/hooks/useAuthRecovery';
import { useEffect } from 'react';
import { useLogout } from '@/queries/auth';

export function useAuthState() {
  const { session, status } = useAuthRecovery();
  const { mutate: logout } = useLogout();
  const isLoggedIn = status === 'authenticated';

  useEffect(() => {
    if (session && 'error' in session && session.error === 'RefreshAccessTokenError') logout();
  }, [session, logout]);

  return {
    isLoggedIn,
  };
}
