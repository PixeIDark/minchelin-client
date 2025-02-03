import { useFavoriteLists, useFavoriteMutations } from '@/queries/favorite';
import FavoriteItem from '@/components/common/song-card/favorite-sheet/favorite-list/favorite-item/FavoriteItem';
import { flex } from '@/styled-system/patterns';

function FavoriteList({ songId }: { songId: number }) {
  const { data: favoriteLists } = useFavoriteLists();
  const { addSong, removeSong } = useFavoriteMutations();

  const handleFavorite = (listId: number, checked: boolean) => {
    if (checked) {
      addSong.mutate({
        listId,
        songId,
      });
    } else {
      removeSong.mutate(3);
    }
  };

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
