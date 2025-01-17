import { useCallback, useRef } from 'react';
import { useIntersection } from '@/hooks/useIntersection';

interface UseInfiniteScrollOptions {
  hasNextPage?: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
  rootMargin?: string;
}

export function useInfiniteScroll({
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
  rootMargin = '100px',
}: UseInfiniteScrollOptions) {
  const loaderRef = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  useIntersection(loaderRef, {
    onIntersect: handleIntersect,
    rootMargin,
  });

  return { loaderRef, isFetchingNextPage };
}
