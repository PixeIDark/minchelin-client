export interface RecipeListParams {
  page?: number;
  limit?: number;
  category?: number;
}

export const RECIPE_KEYS = {
  all: ['recipes'] as const,
  lists: () => [...RECIPE_KEYS.all, 'list'] as const,
  list: (params: RecipeListParams) => [...RECIPE_KEYS.lists(), params] as const,
  details: () => [...RECIPE_KEYS.all, 'detail'] as const,
  detail: (id: number) => [...RECIPE_KEYS.details(), id] as const,
} as const;
