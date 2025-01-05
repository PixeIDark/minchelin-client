import { SearchResult } from '@/app/search/_components/search-result';
import { SearchParams } from '@/types/search';
import { SearchPanel } from '@/app/search/_components/search-panel';
import { css } from '@/styled-system/css';

function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className={css({ marginTop: '10' })}>
      <SearchPanel />
      <SearchResult searchParams={searchParams} />
    </div>
  );
}

export default SearchPage;
