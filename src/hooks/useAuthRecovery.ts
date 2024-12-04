import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

// 세션 초기화 방지(불러오기)
export const useAuthRecovery = () => {
  const { data: session, status, update } = useSession();

  useEffect(() => {
    // 브라우저 포커스시 세션 체크
    const handleFocus = () => {
      if (!session) {
        update();
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [session, update]);

  return { session, status };
};
