import { AccordionContent } from '@/components/ui/accordion';
import { FavoriteSong } from '@/types/favorite';
import { flex } from '@/styled-system/patterns';
import { useRemoveFavoriteSong } from '@/queries/favorite';

// 노래방 번호도 보이게 어케 해봐라 가수랑
// 노래 제거 <= ui 즉시 업데이트 안됨
// 1. 유지 이펙트
// 2. 쿼리키 수정
function FavoriteListAccordionContent({ favoriteSong }: { favoriteSong: FavoriteSong }) {
  const songTitle = favoriteSong.title_ko || favoriteSong.title_ja;
  const { mutate: removeSong } = useRemoveFavoriteSong();

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
