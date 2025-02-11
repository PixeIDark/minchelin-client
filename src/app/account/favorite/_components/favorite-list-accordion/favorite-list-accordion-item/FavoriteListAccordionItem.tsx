'use client';

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useFavoriteListSongs } from '@/queries/favorite';
import { FavoriteList } from '@/types/favorite';
import { FavoriteListAccordionContent } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/favorite-list-accordion-content';
import { useDragAndDrop } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/_hook/useDragAndDrop';
import { useToggleContent } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/_hook/useToggleContent';

// TODO: isOpen 아코디언 열린상태로 새로고침하면 isOpen이 시작 시, false라 문제 발생
function FavoriteListAccordionItem({ list }: { list: FavoriteList }) {
  const { isOpen, handleToggleContent } = useToggleContent();
  const { data: favoriteSongs } = useFavoriteListSongs(list.id, {
    enabled: isOpen,
  });
  const { handleDragStart, handleDragEnter, handleDragEnd, handleDragOver } = useDragAndDrop(
    list.id
  );

  return (
    <AccordionItem value={list.id.toString()}>
      <AccordionTrigger onPointerDown={handleToggleContent}>{list.name}</AccordionTrigger>
      {isOpen &&
        favoriteSongs &&
        favoriteSongs.map((favoriteSong) => (
          <FavoriteListAccordionContent
            key={favoriteSong.favorite_id}
            favoriteSong={favoriteSong}
            listId={list.id}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
          />
        ))}
    </AccordionItem>
  );
}
export default FavoriteListAccordionItem;
