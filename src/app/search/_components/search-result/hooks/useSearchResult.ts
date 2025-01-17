import { useSearch } from '@/queries/search';
import { SearchParams } from '@/types/search';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

export function useSearchResult(searchParams: SearchParams) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearch(searchParams);

  const { loaderRef, isFetchingNextPage: isLoading } = useInfiniteScroll({
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  });

  const songs = data?.pages.flatMap((page) => page.items) ?? [];
  const totalSongs = data?.pages[0]?.total ?? 0;

  return {
    songs,
    totalSongs,
    loaderRef,
    isLoading,
  };
}
