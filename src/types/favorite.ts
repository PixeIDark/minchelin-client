export interface FavoriteList {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface FavoriteSong {
  favorite_id: number;
  song_id: number;
  order: number;
  title_ko: string;
  title_ja?: string;
  title_en?: string;
  thumbnail_url?: string;
}

export interface GetFavoriteListsResponse {
  items: FavoriteList[];
}

export interface GetFavoriteListSongsResponse {
  items: FavoriteSong[];
}

export interface ReorderSongRequest {
  favoriteId: number;
  newOrder: number;
}
