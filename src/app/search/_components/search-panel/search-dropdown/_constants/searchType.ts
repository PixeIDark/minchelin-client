import { SearchParams } from '@/types/search';

export const SEARCH_TYPE_LABEL: { [key in SearchParams['searchType']]: string } = {
  both: '노래/가수',
  title: '노래',
  artist: '가수',
  lyrics: '가사',
} as const;
