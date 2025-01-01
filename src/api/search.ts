import { fetchInstance } from './instance';
import { SearchParams, SearchResponse } from '@/types/search';

export const searchApi = (params: SearchParams) => {
  const queryParams = new URLSearchParams({
    text: params.text,
    lang: params.lang || 'ko',
    searchType: params.searchType || 'both',
    sort: params.sort || 'population',
    limit: params.limit?.toString() || '10',
    page: params.page?.toString() || '1',
  });

  return fetchInstance.get<SearchResponse>(`/search?${queryParams.toString()}`);
};
