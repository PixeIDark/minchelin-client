import { fetchInstance } from './instance';
import {
  GetFavoriteListSongsResponse,
  GetFavoriteListsResponse,
  ReorderSongRequest,
} from '@/types/favorite';

export const favoritesApi = {
  // 즐겨찾기 목록 조회
  getLists: () => fetchInstance.get<GetFavoriteListsResponse>('/favorites/lists'),

  // 특정 즐겨찾기의 곡 목록 조회
  getListSongs: (listId: number) =>
    fetchInstance.get<GetFavoriteListSongsResponse>(`/favorites/lists/${listId}/songs`),

  // 즐겨찾기 목록 생성
  createList: (favoriteName: string) => fetchInstance.post('/favorites/lists', favoriteName),

  // 즐겨찾기 목록 이름 수정
  updateList: (listId: number, favoriteName: string) =>
    fetchInstance.put(`/favorites/lists/${listId}`, favoriteName),

  // 즐겨찾기 목록 삭제
  deleteList: (listId: number) => fetchInstance.delete(`/favorites/lists/${listId}`),

  // 즐겨찾기에 곡 추가
  addSong: (listId: number, songId: number) =>
    fetchInstance.post(`/favorites/lists/${listId}/songs`, { songId }),

  // 즐겨찾기에서 곡 제거
  removeSong: (favoriteId: number) => fetchInstance.delete(`/favorites/songs/${favoriteId}`),

  // 즐겨찾기 곡 순서 변경
  reorderSong: (data: ReorderSongRequest) => fetchInstance.put('/favorites/songs/reorder', data),
};
