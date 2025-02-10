import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/toast/useToast';
import { favoritesApi } from '@/api/favorites';
import { FAVORITE_KEYS } from '@/queries/favorite/key';

export function useCreateFavoriteList() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (name: string) => favoritesApi.createList(name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 생성되었습니다' });
    },
    onError: (error) => {
      toast({
        title: '즐겨찾기 생성 실패',
        description: error.message,
        variant: 'destructive',
      });
    },
  });
}

export function useUpdateFavoriteList() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ listId, name }: { listId: number; name: string }) =>
      favoritesApi.updateList(listId, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 수정되었습니다' });
    },
  });
}

export function useDeleteFavoriteList() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (listId: number) => favoritesApi.deleteList(listId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.lists() });
      toast({ title: '즐겨찾기 목록이 삭제되었습니다' });
    },
  });
}

export function useAddFavoriteSong() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ listId, songId }: { listId: number; songId: number }) =>
      favoritesApi.addSong(listId, songId),
    onSuccess: (data, variables) => {
      if (variables.listId) {
        queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.songs(variables.listId) });
      }
      toast({ title: '곡이 즐겨찾기에 추가되었습니다' });
      return data;
    },
    onError: (error) => {
      toast({
        title: error instanceof Error ? error.message : '즐겨찾기 추가 중 오류가 발생했습니다',
        variant: 'destructive',
      });
    },
  });
}

export function useRemoveFavoriteSong(listId?: number) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (favoriteId: number) => favoritesApi.removeSong(favoriteId),
    onSuccess: () => {
      // 특정 리스트의 쿼리를 무효화
      if (listId) {
        queryClient.invalidateQueries({
          queryKey: FAVORITE_KEYS.songs(listId),
        });
      }
      toast({ title: '곡이 즐겨찾기에서 제거되었습니다' });
    },
    onError: (error) => {
      toast({
        title: '곡 삭제 실패',
        description: error instanceof Error ? error.message : '삭제 중 오류가 발생했습니다',
        variant: 'destructive',
      });
    },
  });
}

export function useReorderFavoriteSong(listId?: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ favoriteId, newOrder }: { favoriteId: number; newOrder: number }) =>
      favoritesApi.reorderSong({ favoriteId, newOrder }),
    onSuccess: () => {
      if (listId) {
        queryClient.invalidateQueries({ queryKey: FAVORITE_KEYS.songs(listId) });
      }
    },
  });
}
