import { useSearchParams } from 'next/navigation';

export function useSearchState() {
  const searchParams = useSearchParams();
  const hasSearched = searchParams.get('text') !== null;

  return {
    hasSearched,
  };
}
