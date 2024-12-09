import { useSearchParams } from 'next/navigation';

export function useCallbackUrl(defaultUrl = '/') {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || defaultUrl;

  return { callbackUrl };
}
