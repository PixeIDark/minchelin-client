import { SearchResult } from '@/app/search/_components/search-result';
import { SearchParams } from '@/types/search';
import { css } from '@/styled-system/css';
import { getSession } from 'next-auth/react';

function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  console.log(getSession());
  console.log('fs');
  return (
    <div className={css({ mt: '4' })}>
      <SearchResult searchParams={searchParams} />
    </div>
  );
}

export default SearchPage;
