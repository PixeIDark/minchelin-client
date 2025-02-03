import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/toast/useToast';
import { favoritesApi } from '@/api/favorites';

export const useFavoriteMutations = (listId?: number) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createList = useMutation({
    mutationFn: (name: string) => favoritesApi.createList(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 생성되었습니다' });
    },
  });

  const updateList = useMutation({
    mutationFn: ({ listId, name }: { listId: number; name: string }) =>
      favoritesApi.updateList(listId, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 수정되었습니다' });
    },
  });

  const deleteList = useMutation({
    mutationFn: (listId: number) => favoritesApi.deleteList(listId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 삭제되었습니다' });
    },
  });

  const addSong = useMutation({
    mutationFn: (songId: number) => favoritesApi.addSong(listId!, songId),
    onSuccess: () => {
      if (listId) {
        queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.songs(listId) });
      }
      toast({ title: '곡이 즐겨찾기에 추가되었습니다' });
    },
  });

  const removeSong = useMutation({
    mutationFn: (favoriteId: number) => favoritesApi.removeSong(favoriteId),
    onSuccess: () => {
      if (listId) {
        queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.songs(listId) });
      }
      toast({ title: '곡이 즐겨찾기에서 제거되었습니다' });
    },
  });

  const reorderSong = useMutation({
    mutationFn: ({ favoriteId, newOrder }: { favoriteId: number; newOrder: number }) =>
      favoritesApi.reorderSong({ favoriteId, newOrder }),
    onSuccess: () => {
      if (listId) {
        queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.songs(listId) });
      }
    },
  });

  return {
    createList,
    updateList,
    deleteList,
    addSong,
    removeSong,
    reorderSong,
  };
};
