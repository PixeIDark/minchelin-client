'use client';

import { useCallback, useRef } from 'react';
import { useSearch } from '@/queries/search';
import { SearchList } from './search-list';
import { SearchPanel } from './search-panel';
import { useIntersection } from '@/hooks/useIntersection';
import { css } from '@/styled-system/css';
import { SearchParams } from '@/types/search';

function SearchResult({ searchParams }: { searchParams: SearchParams }) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearch(searchParams);

  const handleIntersect = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useIntersection(loaderRef, { onIntersect: handleIntersect, rootMargin: '100px' });

  const songs = data?.pages.flatMap((page) => page.items) ?? [];
  const totalSongs = data?.pages[0]?.total ?? 0;

  return (
    <div
      className={css({
        h: 'full',
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <SearchPanel totalSongs={totalSongs} />
      <div
        className={css({
          flex: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar': { display: 'none' },
        })}
      >
        <SearchList searchList={songs} />
        <div ref={loaderRef} className={css({ h: '10px', mt: '4' })} />
        {isFetchingNextPage && (
          <div
            className={css({
              textAlign: 'center',
              py: '4',
              color: 'gray.500',
            })}
          >
            로딩중...
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResult;
