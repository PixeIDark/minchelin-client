import { SearchResult } from '@/app/search/_components/search-result';
import { SearchParams } from '@/types/search';
import { css } from '@/styled-system/css';

function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className={css({ mt: '4' })}>
      <SearchResult searchParams={searchParams} />
    </div>
  );
}

export default SearchPage;
