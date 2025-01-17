import { SearchParams } from '@/types/search';

export const SEARCH_KEYS = {
  all: ['search'] as const,
  results: () => [...SEARCH_KEYS.all, 'results'] as const,
  result: (params: SearchParams) =>
    [...SEARCH_KEYS.results(), params.text, params.searchType, params.sort] as const,
} as const;
