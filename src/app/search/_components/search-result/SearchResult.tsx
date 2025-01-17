'use client';

import { SearchList } from './search-list';
import { SearchPanel } from './search-panel';
import { css } from '@/styled-system/css';
import { SearchParams } from '@/types/search';
import { useSearchResult } from '@/app/search/_components/search-result/hooks/useSearchResult';
import { Loader2 } from 'lucide-react';
import React from 'react';
import { LoadingSpinner } from '@/components/common/loading-spinner';

function SearchResult({ searchParams }: { searchParams: SearchParams }) {
  const { songs, totalSongs, loaderRef, isLoading } = useSearchResult(searchParams);

  return (
    <div>
      <SearchPanel totalSongs={totalSongs} />
      <SearchList searchList={songs} />
      <div ref={loaderRef} className={css({ h: '10px', mt: '4' })} />
      <LoadingSpinner isLoading={isLoading}>노래 목록을 가져오는 중</LoadingSpinner>
    </div>
  );
}

export default SearchResult;
