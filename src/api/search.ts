import { fetchInstance } from './instance';
import { SearchParams, SearchResponse } from '@/types/search';
import { createQueryString } from '@/utils/createQueryString';

export const searchApi = ({
  text,
  lang = 'ko',
  searchType = 'both',
  sort = 'popular',
  limit = 10,
  page = 1,
}: SearchParams) => {
  const params = { text, lang, searchType, sort, limit, page };
  return fetchInstance.get<SearchResponse>(`/search?${createQueryString(params)}`);
};
