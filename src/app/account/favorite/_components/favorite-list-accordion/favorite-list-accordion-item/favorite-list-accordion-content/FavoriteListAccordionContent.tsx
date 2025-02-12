import { AccordionContent } from '@/components/ui/accordion';
import { FavoriteSong } from '@/types/favorite';
import { flex } from '@/styled-system/patterns';
import { useRemoveFavoriteSong } from '@/queries/favorite';
import { css } from '@/styled-system/css';

interface FavoriteListAccordionContentProps {
  favoriteSong: FavoriteSong;
  listId: number;
  onDragStart: (id: number) => void;
  onDragEnter: (order: number) => void;
  onDragEnd: () => void;
  onDragOver: (e: { preventDefault: () => void }) => void;
}

// 노래방 번호도 보이게 어케 해봐라 가수랑
// css pointer를 onDragStart인 순간에도 적용 시켜줘야해 data-set으로 전체적으로
function FavoriteListAccordionContent({
  favoriteSong,
  listId,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
}: FavoriteListAccordionContentProps) {
  const songTitle = favoriteSong.title_ko || favoriteSong.title_ja;
  const { mutate: removeSong } = useRemoveFavoriteSong(listId);

  return (
    <AccordionContent
      draggable={true}
      onDragStart={() => onDragStart(favoriteSong.favorite_id)}
      onDragEnter={() => onDragEnter(favoriteSong.order)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      className={css({ cursor: 'pointer' })}
    >
      <div className={flex({ justifyContent: 'space-between' })}>
        <h1>{songTitle}</h1>
        <button onClick={() => removeSong(favoriteSong.favorite_id)}>삭제</button>
      </div>
    </AccordionContent>
  );
}

export default FavoriteListAccordionContent;
