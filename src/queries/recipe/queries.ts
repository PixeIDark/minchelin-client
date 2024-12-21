import { useQuery } from '@tanstack/react-query';
import { recipeApi } from '@/api/recipe';
import { RECIPE_KEYS, RecipeListParams } from '@/queries/recipe/key';

export const useRecipes = (params?: RecipeListParams) => {
  return useQuery({
    queryKey: RECIPE_KEYS.list(params ?? {}),
    queryFn: () => recipeApi.getRecipes(params),
  });
};

export const useRecipe = (id: number) => {
  return useQuery({
    queryKey: RECIPE_KEYS.detail(id),
    queryFn: () => recipeApi.getRecipeById(id),
    enabled: !!id,
  });
};
