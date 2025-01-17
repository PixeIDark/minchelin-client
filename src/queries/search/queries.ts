import { useInfiniteQuery } from '@tanstack/react-query';
import { searchApi } from '@/api/search';
import { SearchParams } from '@/types/search';
import { SEARCH_KEYS } from './key';

export const useSearch = (params: SearchParams) => {
  return useInfiniteQuery({
    queryKey: SEARCH_KEYS.result(params),
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
    enabled: Boolean(params.text),
  });
};
