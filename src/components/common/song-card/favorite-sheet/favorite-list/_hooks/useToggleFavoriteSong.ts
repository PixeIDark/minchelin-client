import { useAddFavoriteSong, useRemoveFavoriteSong } from '@/queries/favorite';
import { useState } from 'react';

export function useToggleFavoriteSong(songId: number) {
  const [favoriteId, setFavoriteId] = useState<number | null>(null);
  const { mutateAsync: addSong } = useAddFavoriteSong();
  const { mutateAsync: removeSong } = useRemoveFavoriteSong();

  return async (listId: number, checked: boolean) => {
    if (checked) {
      const response = await addSong({ listId, songId });
      setFavoriteId(response.favorite_id);
    } else if (favoriteId) {
      await removeSong(favoriteId);
      setFavoriteId(null);
    }
  };
}
