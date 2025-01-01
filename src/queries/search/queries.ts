import { useQuery } from '@tanstack/react-query';
import { searchApi } from '@/api/search';
import { SearchParams, SearchResponse } from '@/types/search';
import { SEARCH_KEYS } from './key';

const keepPreviousSearchData = (previousData: SearchResponse | undefined) => previousData;

export const useSearch = (params: SearchParams) => {
  return useQuery({
    queryKey: SEARCH_KEYS.result(params),
    queryFn: () => searchApi(params),
    enabled: false,
    placeholderData: keepPreviousSearchData,
  });
};
