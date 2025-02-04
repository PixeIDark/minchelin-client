// 즐겨찾기 목록 조회
import { useQuery } from '@tanstack/react-query';
import { favoritesApi } from '@/api/favorites';
import { FAVORITE_KEYS } from '@/queries/favorite/key';

export const useFavoriteLists = () => {
  return useQuery({
    queryKey: FAVORITE_KEYS.lists(),
    queryFn: () => favoritesApi.getLists(),
  });
};

export const useFavoriteListSongs = (listId: number) => {
  return useQuery({
    queryKey: FAVORITE_KEYS.songs(listId),
    queryFn: () => favoritesApi.getListSongs(listId),
  });
};
