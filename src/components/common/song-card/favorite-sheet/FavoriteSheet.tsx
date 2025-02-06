'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { BookmarkCheck } from 'lucide-react';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';
import { FavoriteList } from '@/components/common/song-card/favorite-sheet/favorite-list';
import { FavoriteDialog } from '@/components/common/song-card/favorite-sheet/favorite-dialog';

function FavoriteSheet({ songId }: { songId: number }) {
  return (
    <Sheet side='bottom'>
      <SheetTrigger
        className={flex({
          minW: '9',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <BookmarkCheck strokeWidth={1} className={css({ color: 'gray.500' })} />
      </SheetTrigger>
      <SheetContent w='calc(100% - 32px)' md={{ w: '540px' }}>
        <SheetHeader>
          <SheetTitle>즐겨찾기에 추가</SheetTitle>
          <SheetDescription
            className={css({ borderTop: '1px solid', borderTopColor: 'red', mx: '-4' })}
          />
        </SheetHeader>
        <FavoriteList songId={songId} />
        <SheetFooter className={css({ mt: '4' })}>
          <FavoriteDialog />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default FavoriteSheet;
