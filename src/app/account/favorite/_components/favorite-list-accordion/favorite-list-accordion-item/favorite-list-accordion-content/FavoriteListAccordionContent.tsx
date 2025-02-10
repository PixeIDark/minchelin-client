import { AccordionContent } from '@/components/ui/accordion';
import { FavoriteSong } from '@/types/favorite';
import { flex } from '@/styled-system/patterns';
import { useRemoveFavoriteSong } from '@/queries/favorite';

interface FavoriteListAccordionContentProps {
  favoriteSong: FavoriteSong;
  listId: number;
}

// 노래방 번호도 보이게 어케 해봐라 가수랑
function FavoriteListAccordionContent({ favoriteSong, listId }: FavoriteListAccordionContentProps) {
  const songTitle = favoriteSong.title_ko || favoriteSong.title_ja;
  const { mutate: removeSong } = useRemoveFavoriteSong(listId);

  return (
    <AccordionContent>
      <div className={flex({ justifyContent: 'space-between' })}>
        <h1>{songTitle}</h1>
        <button onClick={() => removeSong(favoriteSong.favorite_id)}>삭제</button>
      </div>
    </AccordionContent>
  );
}

export default FavoriteListAccordionContent;
