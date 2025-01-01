import { fetchInstance } from './instance';
import { SearchParams, SearchResponse } from '@/types/search';

export const searchApi = (params: SearchParams) => {
  const queryParams = new URLSearchParams({
    text: params.text,
    lang: params.lang,
    searchType: params.searchType,
    sort: params.sort,
    limit: params.limit?.toString() || '20',
    page: params.page?.toString() || '1',
  });

  return fetchInstance.get<SearchResponse>(`/search?${queryParams.toString()}`);
};
