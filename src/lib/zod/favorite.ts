import { z } from 'zod';

export const favoriteSchema = z.object({
  name: z.string().min(1, '즐겨찾기 이름을 입력해주세요').max(20, '20자 이내로 입력해주세요'),
});

export type FavoriteFormData = z.infer<typeof favoriteSchema>;
