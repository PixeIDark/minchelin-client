import React from 'react';
import { SearchParams } from '@/types/search';
import { SEARCH_TYPE_LABEL } from '@/app/search/_components/search-result/search-panel/_constants/searchType';

interface SearchResultCountProps {
  searchType: SearchParams['searchType'];
  totalSongs: number;
}

// TODO: api 리턴 전에 결과 텍스트가 경거망동함 이거 로딩으로 해결해줘야됨.
function SearchResultCount({ searchType, totalSongs }: SearchResultCountProps) {
  const selectedLabel = SEARCH_TYPE_LABEL[searchType];

  return (
    <div>
      {selectedLabel} ({totalSongs}개의 검색결과)
    </div>
  );
}

export default SearchResultCount;
