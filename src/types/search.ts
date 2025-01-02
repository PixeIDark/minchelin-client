export interface SearchParams {
  text: string;
  lang?: 'ko' | 'ja' | 'en';
  searchType?: 'both' | 'artist' | 'title' | 'lyrics';
  sort?: 'latest' | 'popular';
  limit?: number;
  page?: number;
}
export interface SearchItem {
  id: number;
  title_ko: string;
  title_ja?: string;
  title_en?: string;
  artist_id: number;
  artist_name_ko: string;
  artist_name_ja?: string;
  artist_name_en?: string;
  release_date?: string;
  thumbnail_url?: string;
  karaoke_numbers?: Array<{
    brand: 'kumyoung' | 'tj';
    number: string;
  }>;
  popularity_score: number;
}

export type SearchItems = SearchItem[];

export interface SearchResponse {
  items: SearchItems;
  total: number;
  page: number;
  limit: number;
}
