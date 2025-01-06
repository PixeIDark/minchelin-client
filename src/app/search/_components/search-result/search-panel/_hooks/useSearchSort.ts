import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchParams } from '@/types/search';

export function useSearchSort() {
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState<SearchParams['sort']>(
    (searchParams.get('sort') as SearchParams['sort']) || 'latest'
  );

  return {
    sortBy,
    setSortBy,
  };
}
