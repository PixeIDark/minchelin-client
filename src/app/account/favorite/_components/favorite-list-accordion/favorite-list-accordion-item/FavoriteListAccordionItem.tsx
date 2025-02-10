import { AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FavoriteList } from '@/types/favorite';
import { useFavoriteListSongs } from '@/queries/favorite';
import { FavoriteListAccordionContent } from '@/app/account/favorite/_components/favorite-list-accordion/favorite-list-accordion-item/favorite-list-accordion-content';

function FavoriteListAccordionItem({ list }: { list: FavoriteList }) {
  const { data: favoriteSongs } = useFavoriteListSongs(list.id);

  if (!favoriteSongs) return null;

  return (
    <>
      <AccordionItem value={list.id.toString()}>
        <AccordionTrigger>{list.name}</AccordionTrigger>
        {favoriteSongs.map((favoriteSong) => (
          <FavoriteListAccordionContent
            key={favoriteSong.favorite_id}
            favoriteSong={favoriteSong}
          />
        ))}
      </AccordionItem>
    </>
  );
}

export default FavoriteListAccordionItem;
