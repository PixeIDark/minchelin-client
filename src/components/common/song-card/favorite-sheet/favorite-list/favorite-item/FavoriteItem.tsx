import { FavoriteList } from '@/types/favorite';
import { Checkbox } from '@/components/ui/checkbox';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface FavoriteItemProps {
  favoriteItem: FavoriteList;
  onFavoriteChange: (checked: boolean) => void;
}

function FavoriteItem({ favoriteItem, onFavoriteChange }: FavoriteItemProps) {
  return (
    <li className={flex({ gap: '2' })}>
      <Checkbox onCheckedChange={onFavoriteChange} />
      <h1 className={css({ textStyle: 'lg' })}>{favoriteItem.name}</h1>
    </li>
  );
}

export default FavoriteItem;
