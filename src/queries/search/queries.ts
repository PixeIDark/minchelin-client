import { useInfiniteQuery } from '@tanstack/react-query';
import { searchApi } from '@/api/search';
import { SearchParams } from '@/types/search';
import { SEARCH_KEYS } from './key';

interface SearchQueryOptions {
  enabled?: boolean;
}

export const useSearch = (params?: SearchParams, options?: SearchQueryOptions) => {
  return useInfiniteQuery({
    queryKey: params ? SEARCH_KEYS.result(params) : SEARCH_KEYS.all,
    queryFn: ({ pageParam = 1 }) =>
      searchApi({
        ...params,
        page: pageParam,
      }),
    getNextPageParam: (lastPage) => {
      if (!lastPage.total) return undefined;
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      return lastPage.page < totalPages ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 1,
    ...options,
  });
};
