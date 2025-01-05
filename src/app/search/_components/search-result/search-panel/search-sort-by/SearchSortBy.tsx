// SearchSortBy.tsx
'use client';

import { SearchParams } from '@/types/search';
import { Dispatch, SetStateAction } from 'react';
import styles from './search-sort-by.styles';
import { useRouter, useSearchParams } from 'next/navigation';
import { createQueryString } from '@/utils/createQueryString';

interface SearchSortByProps {
  sortBy: SearchParams['sort'];
  setSortBy: Dispatch<SetStateAction<SearchParams['sort']>>;
}

function SearchSortBy({ sortBy, setSortBy }: SearchSortByProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSort = (sort: SearchParams['sort']) => {
    setSortBy(sort);

    const params = {
      text: searchParams.get('text') || '',
      searchType: searchParams.get('searchType') || 'both',
      sort,
    };

    router.push(`/search?${createQueryString(params)}`);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={() => handleSort('latest')} className={styles.button(sortBy === 'latest')}>
        최신순
      </button>
      <div className={styles.divider} />
      <button onClick={() => handleSort('popular')} className={styles.button(sortBy === 'popular')}>
        인기순
      </button>
    </div>
  );
}

export default SearchSortBy;
