'use client';

import { SearchParams } from '@/types/search';
import { useSearch } from '@/queries/search';
import { SearchList } from '@/app/search/_components/search-result/search-list';

// ToDo: 페이지 네이션으로 SearchList 할 꺼 생각해야함.
function SearchResult({ searchParams }: { searchParams: SearchParams }) {
  const { data: searchData } = useSearch(searchParams);

  if (!searchData) return null; // ToDo: 검색 결과가 없습니다 컴포넌트로 해줘라

  return (
    <div>
      <SearchList searchList={searchData.items} />
    </div>
  );
}

export default SearchResult;
