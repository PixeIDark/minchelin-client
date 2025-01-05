export interface SearchParams {
  text: string;
  searchType: 'both' | 'artist' | 'title' | 'lyrics';
  sort?: 'latest' | 'popular';
  limit?: number;
  page?: number;
}

export interface SearchItem {
  id: number;
  song_id: number;
  artist_id: number;
  title_ko: string;
  title_ja?: string;
  title_en?: string;
  artist_ko: string;
  artist_ja?: string;
  artist_en?: string;
  release_date?: string;
  popularity_score: number;
  thumbnail_url?: string;
  created_at: string;
  updated_at: string;
}

export type SearchItems = SearchItem[];

export interface SearchResponse {
  items: SearchItems;
  total: number;
  page: number;
  limit: number;
}
