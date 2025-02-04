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

export type GetFavoriteListsResponse = FavoriteList[];

export type GetFavoriteListSongsResponse = FavoriteSong[];

export interface FavoriteAddSongResponse {
  favorite_id: number;
  message: string;
}

export interface ReorderSongRequest {
  favoriteId: number;
  newOrder: number;
}
