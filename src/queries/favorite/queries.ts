// 즐겨찾기 목록 조회
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { favoritesApi } from '@/api/favorites';
import { FAVORITE_KEYS } from '@/queries/favorite/key';
import { GetFavoriteListSongsResponse, GetFavoriteListsResponse } from '@/types/favorite';

export const useFavoriteLists = (
  options?: Omit<UseQueryOptions<GetFavoriteListsResponse, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: FAVORITE_KEYS.lists(),
    queryFn: () => favoritesApi.getLists(),
    ...options,
  });
};

export const useFavoriteListSongs = (
  listId: number,
  options?: Omit<UseQueryOptions<GetFavoriteListSongsResponse, Error>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: FAVORITE_KEYS.songs(listId),
    queryFn: () => favoritesApi.getListSongs(listId),
    ...options,
  });
};
