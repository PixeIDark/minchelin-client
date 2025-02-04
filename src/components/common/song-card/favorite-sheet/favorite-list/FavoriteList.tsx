import { useFavoriteLists } from '@/queries/favorite';
import { flex } from '@/styled-system/patterns';
import { FavoriteItem } from '@/components/common/song-card/favorite-sheet/favorite-list/favorite-item';
import { useToggleFavoriteSong } from '@/components/common/song-card/favorite-sheet/favorite-list/_hooks/useToggleFavoriteSong';

function FavoriteList({ songId }: { songId: number }) {
  const { data: favoriteLists } = useFavoriteLists();
  const handleFavorite = useToggleFavoriteSong(songId);

  return (
    <ul className={flex({ flexDir: 'column', gap: '2', mt: '4' })}>
      {favoriteLists?.map((item) => (
        <FavoriteItem
          key={item.id}
          favoriteItem={item}
          onFavoriteChange={(checked) => handleFavorite(item.id, checked)}
        />
      ))}
    </ul>
  );
}

export default FavoriteList;
