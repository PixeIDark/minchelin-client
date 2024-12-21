import { useMutation, useQueryClient } from '@tanstack/react-query';
import { recipeApi, CreateRecipeRequest, UpdateRecipeRequest } from '@/api/recipe';
import { RECIPE_KEYS } from '@/queries/recipe/key';

export const useCreateRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateRecipeRequest) => recipeApi.createRecipe(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: RECIPE_KEYS.lists(),
      });
    },
    onError: (error) => {
      console.error('레시피 생성 실패:', error);
      throw error;
    },
  });
};

export const useUpdateRecipe = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdateRecipeRequest) => recipeApi.updateRecipe(id, data),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: RECIPE_KEYS.detail(id),
        }),
        queryClient.invalidateQueries({
          queryKey: RECIPE_KEYS.lists(),
        }),
      ]);
    },
    onError: (error) => {
      console.error('레시피 수정 실패:', error);
      throw error;
    },
  });
};

export const useDeleteRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => recipeApi.deleteRecipe(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: RECIPE_KEYS.lists(),
      });
    },
    onError: (error) => {
      console.error('레시피 삭제 실패:', error);
      throw error;
    },
  });
};
