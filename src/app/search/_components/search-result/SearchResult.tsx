'use client';

import { SearchParams } from '@/types/search';
import { useSearch } from '@/queries/search';
import { SearchList } from '@/app/search/_components/search-result/search-list';
import { SearchPanel } from '@/app/search/_components/search-result/search-panel';

// ToDo: 페이지 네이션으로 SearchList 할 꺼 생각해야함.
function SearchResult({ searchParams }: { searchParams: SearchParams }) {
  const { data: searchData } = useSearch(searchParams);

  const totalSongs = searchData?.total ?? 0;

  return (
    <div>
      <SearchPanel totalSongs={totalSongs} />
      {searchData && <SearchList searchList={searchData.items} />}
    </div>
  );
}

export default SearchResult;
