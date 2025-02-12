'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useFavoriteListSongs } from '@/queries/favorite';
import { FavoriteList } from '@/types/favorite';
import { useDragAndDrop } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/_hook/useDragAndDrop';
import { useToggleContent } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/_hook/useToggleContent';
import { FavoriteCard } from '@/components/common/favorite-card';

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
      <AccordionContent>
        {favoriteSongs &&
          favoriteSongs.map((favoriteSong) => (
            <FavoriteCard
              key={favoriteSong.id}
              favoriteSong={favoriteSong}
              listId={list.id}
              onDragStart={handleDragStart}
              onDragEnter={handleDragEnter}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
            />
          ))}
      </AccordionContent>
    </AccordionItem>
  );
}
export default FavoriteListAccordionItem;
