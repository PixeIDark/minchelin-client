export const FAVORITE_KEYS = {
  all: ['favorites'] as const,
  lists: () => [...FAVORITE_KEYS.all, 'lists'] as const,
  songs: (listId: number) => [...FAVORITE_KEYS.all, 'songs', listId] as const,
};
