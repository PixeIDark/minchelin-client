import { useMemo, useRef } from 'react';
import { useReorderFavoriteSong } from '@/queries/favorite';

export function useDragAndDrop(listId?: number) {
  const { mutate: reorderSong } = useReorderFavoriteSong(listId);
  const dragId = useRef<null | number>(null);
  const dragOrder = useRef<null | number>(null);

  const handleDragStart = (id: number) => (dragId.current = id);

  const handleDragEnter = (order: number) => (dragOrder.current = order);

  const handleDragEnd = () => {
    if (dragId.current && dragOrder.current)
      reorderSong({ favoriteId: dragId.current, newOrder: dragOrder.current });
    dragId.current = null;
    dragOrder.current = null;
  };

  const handleDragOver = (e: { preventDefault: () => void }) => e.preventDefault();

  return useMemo(
    () => ({
      handleDragStart,
      handleDragEnter,
      handleDragEnd,
      handleDragOver,
    }),
    []
  );
}
