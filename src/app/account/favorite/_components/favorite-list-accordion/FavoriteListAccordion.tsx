'use client';

import { Accordion } from '@/components/ui/accordion';
import { useFavoriteLists } from '@/queries/favorite';
import { FavoriteListAccordionItem } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item';

function FavoriteListAccordion() {
  const { data: favoriteLists } = useFavoriteLists();

  if (!favoriteLists) return null;

  return (
    <Accordion type='single' collapsible>
      {favoriteLists.map((list) => (
        <FavoriteListAccordionItem key={list.id} list={list} />
      ))}
    </Accordion>
  );
}

export default FavoriteListAccordion;
