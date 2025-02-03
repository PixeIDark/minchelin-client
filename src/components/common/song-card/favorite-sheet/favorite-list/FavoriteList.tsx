import { useFavoriteLists } from '@/queries/favorite';
import FavoriteItem from '@/components/common/song-card/favorite-sheet/favorite-list/favorite-item/FavoriteItem';
import { flex } from '@/styled-system/patterns';

function FavoriteList() {
  const { data: favoriteList } = useFavoriteLists();

  if (!favoriteList) return null;

  return (
    <ul className={flex({ flexDir: 'column', gap: '2', mt: '4' })}>
      {favoriteList.map((item) => (
        <FavoriteItem key={item.id} favoriteItem={item} />
      ))}
    </ul>
  );
}

export default FavoriteList;
