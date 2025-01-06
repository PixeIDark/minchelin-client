import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchParams } from '@/types/search';

export function useSearchType() {
  const searchParams = useSearchParams();
  const [searchType, setSearchType] = useState<SearchParams['searchType']>(
    (searchParams.get('searchType') as SearchParams['searchType']) || 'both'
  );

  return {
    searchType,
    setSearchType,
    currentSearchType: searchParams.get('searchType') as SearchParams['searchType'],
  };
}
