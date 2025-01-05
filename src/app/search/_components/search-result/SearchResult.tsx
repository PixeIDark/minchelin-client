'use client';

import { SearchParams } from '@/types/search';
import { useSearch } from '@/queries/search';
import { SearchList } from '@/app/search/_components/search-result/search-list';
import { SearchPanel } from '@/app/search/_components/search-result/search-panel';

// ToDo: 페이지 네이션으로 SearchList 할 꺼 생각해야함.
function SearchResult({ searchParams }: { searchParams: SearchParams }) {
  const { data: searchData } = useSearch(searchParams);

  console.log(searchData); // TODO: clg 가 왜 클라이언트랑 서버 두 곳에서 뜨는지 도저히 모르겠음
  const totalSongs = searchData?.total ?? 0;

  return (
    <div>
      <SearchPanel totalSongs={totalSongs} />
      {searchData && <SearchList searchList={searchData.items} />}
    </div>
  );
}

export default SearchResult;
