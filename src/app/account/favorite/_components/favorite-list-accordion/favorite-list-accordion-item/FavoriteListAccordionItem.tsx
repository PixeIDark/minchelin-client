'use client';

import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useFavoriteListSongs } from '@/queries/favorite';
import { FavoriteList } from '@/types/favorite';
import { useState } from 'react';
import { FavoriteListAccordionContent } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/favorite-list-accordion-content';

function FavoriteListAccordionItem({ list }: { list: FavoriteList }) {
  const [isOpen, setIsOpen] = useState(false);
  const { data: favoriteSongs } = useFavoriteListSongs(list.id, {
    enabled: isOpen,
  });

  const handleAccordionChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <AccordionItem value={list.id.toString()}>
      <AccordionTrigger onPointerDown={() => handleAccordionChange(!isOpen)}>
        {list.name}
      </AccordionTrigger>
      {isOpen &&
        favoriteSongs &&
        favoriteSongs.map((favoriteSong) => (
          <FavoriteListAccordionContent
            key={favoriteSong.favorite_id}
            favoriteSong={favoriteSong}
            listId={list.id}
          />
        ))}
    </AccordionItem>
  );
}
export default FavoriteListAccordionItem;
