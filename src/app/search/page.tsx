import { SearchResult } from '@/app/search/_components/search-result';
import { SearchParams } from '@/types/search';

function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div>
      <SearchResult searchParams={searchParams} />
    </div>
  );
}

export default SearchPage;
