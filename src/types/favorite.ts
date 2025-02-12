export interface FavoriteList {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface FavoriteSong {
  id: number;
  list_id: number;
  song_id: number;
  title_ko: string;
  title_ja: string;
  title_en: string;
  artist_ko: string;
  artist_ja: string;
  artist_en: string;
  thumbnail_url: string;
  tj_number: string;
  kumyoung_number: string;
  order: number;
  created_at: string;
  updated_at: string;
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
