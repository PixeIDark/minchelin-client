export interface Recipe {
  id: number;
  title: string;
  description: string;
  cooking_time: number;
  difficulty: string;
  thumbnail_url?: string;
  author_name: string;
  category_name: string;
  ingredients?: Array<{
    ingredient_name: string;
    amount: string;
  }>;
  steps?: Array<{
    step_number: number;
    description: string;
    image_url?: string;
  }>;
}
