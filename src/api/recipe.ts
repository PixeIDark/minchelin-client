import { fetchInstance } from './instance';
import { Recipe } from '@/types/recipe';

export interface RecipeListResponse {
  data: Recipe[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface CreateRecipeRequest {
  title: string;
  description: string;
  cooking_time: number;
  difficulty: string;
  category_id: number;
  thumbnail_url?: string;
  ingredients: Array<{
    ingredient_name: string;
    amount: string;
  }>;
  steps: Array<{
    step_number: number;
    description: string;
    image_url?: string;
  }>;
}

export type UpdateRecipeRequest = Partial<CreateRecipeRequest>;

export const recipeApi = {
  // 레시피 목록 조회
  getRecipes: (params?: { page?: number; limit?: number; category?: number }) => {
    const queryParams = new URLSearchParams();
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.limit) queryParams.append('limit', params.limit.toString());
    if (params?.category) queryParams.append('category', params.category.toString());

    return fetchInstance.get<RecipeListResponse>(`/recipes?${queryParams.toString()}`);
  },

  // 레시피 상세 조회
  getRecipeById: (id: number) => fetchInstance.get<Recipe>(`/recipes/${id}`),

  // 레시피 생성
  createRecipe: (data: CreateRecipeRequest) => fetchInstance.post<{ id: number }>('/recipes', data),

  // 레시피 수정
  updateRecipe: (id: number, data: UpdateRecipeRequest) =>
    fetchInstance.post<{ message: string }>(`/recipes/${id}`, data),

  // 레시피 삭제
  deleteRecipe: (id: number) => fetchInstance.post<{ message: string }>(`/recipes/${id}`),
};
