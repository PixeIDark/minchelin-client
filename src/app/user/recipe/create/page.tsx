'use client';

import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormItem, FormLabel } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';
import { LoadingButton } from '@/components/common/loading-button';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/toast/useToast';
import { useCreateRecipe } from '@/queries/recipe/mutations';
import { TextField } from '@/app/(auth)/components/text-field';
import { Button } from '@/components/ui/button';

// zod 스키마
const imageSchema = z.string().url().optional();

const ingredientSchema = z.object({
  ingredient_name: z.string().min(1, '재료명을 입력해주세요'),
  amount: z.string().min(1, '수량을 입력해주세요'),
});

const stepSchema = z.object({
  step_number: z.number(),
  description: z.string().min(1, '조리 과정을 입력해주세요'),
  image_url: imageSchema,
});

const createRecipeSchema = z.object({
  title: z.string().min(1, '레시피 제목을 입력해주세요'),
  description: z.string().min(1, '레시피 설명을 입력해주세요'),
  cooking_time: z.number().min(1, '조리 시간을 입력해주세요'),
  difficulty: z.string().min(1, '난이도를 선택해주세요'),
  category_id: z.number().min(1, '카테고리를 선택해주세요'),
  ingredients: z.array(ingredientSchema).min(1, '최소 1개 이상의 재료가 필요합니다'),
  steps: z.array(stepSchema).min(1, '최소 1개 이상의 조리 과정이 필요합니다'),
  thumbnail_url: imageSchema,
});

type CreateRecipeFormData = z.infer<typeof createRecipeSchema>;

const styles = {
  formWrapper: css({
    display: 'flex',
    flexDir: 'column',
    gap: '6',
    maxW: '768px',
    mx: 'auto',
    p: '6',
  }),

  fieldWrapper: css({
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  }),

  ingredientsWrapper: css({
    display: 'flex',
    flexDir: 'column',
    gap: '4',
  }),

  stepsWrapper: css({
    display: 'flex',
    flexDir: 'column',
    gap: '4',
  }),

  buttonWrapper: css({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '4',
    mt: '6',
  }),
} as const;

const difficultyOptions = [
  { value: '일류', label: '일류' },
  { value: '이류', label: '이류' },
  { value: '삼류', label: '삼류' },
];

export default function CreateRecipePage() {
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: createRecipe, isPending } = useCreateRecipe();

  const form = useForm<CreateRecipeFormData>({
    resolver: zodResolver(createRecipeSchema),
    defaultValues: {
      ingredients: [{ ingredient_name: '', amount: '' }],
      steps: [{ step_number: 1, description: '', image_url: '' }],
      category_id: 1,
    },
  });

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    name: 'ingredients',
    control: form.control,
  });

  const {
    fields: stepFields,
    append: appendStep,
    remove: removeStep,
  } = useFieldArray({
    name: 'steps',
    control: form.control,
  });

  const handleSubmit = (values: CreateRecipeFormData) => {
    createRecipe(values, {
      onSuccess: () => {
        toast({
          title: '레시피 등록 성공',
          description: '레시피가 성공적으로 등록되었습니다',
          variant: 'default',
        });
        router.push('/recipes');
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast({
            title: '레시피 등록 실패',
            description: error.message,
            variant: 'destructive',
          });
        }
      },
    });
  };

  return (
    <main>
      <Form {...form}>
        <styled.form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={styles.formWrapper}
          noValidate
        >
          <FormItem className={styles.fieldWrapper}>
            <FormLabel>레시피 제목</FormLabel>
            <TextField
              control={form.control}
              name='title'
              placeholder='레시피 제목을 입력해주세요'
            />
          </FormItem>

          <FormItem className={styles.fieldWrapper}>
            <FormLabel>레시피 설명</FormLabel>
            <TextField
              control={form.control}
              name='description'
              placeholder='레시피에 대한 설명을 입력해주세요'
            />
          </FormItem>

          <FormItem className={styles.fieldWrapper}>
            <FormLabel>조리 시간 (분)</FormLabel>
            <TextField
              control={form.control}
              name='cooking_time'
              placeholder='조리 시간을 입력해주세요'
            />
          </FormItem>

          <FormItem className={styles.fieldWrapper}>
            <FormLabel>난이도</FormLabel>
            <TextField
              control={form.control}
              name='difficulty'
              placeholder='난이도를 선택해주세요'
            />
          </FormItem>

          <div className={styles.ingredientsWrapper}>
            {ingredientFields.map((field, index) => (
              <div key={field.id}>
                <FormItem className={styles.fieldWrapper}>
                  <FormLabel>{`재료 ${index + 1}`}</FormLabel>
                  <TextField
                    control={form.control}
                    name={`ingredients.${index}.ingredient_name`}
                    placeholder='재료명을 입력해주세요'
                  />
                </FormItem>
                <FormItem className={styles.fieldWrapper}>
                  <FormLabel>수량</FormLabel>
                  <TextField
                    control={form.control}
                    name={`ingredients.${index}.amount`}
                    placeholder='수량을 입력해주세요'
                  />
                </FormItem>
                <Button type='button' onClick={() => removeIngredient(index)} variant='destructive'>
                  재료 삭제
                </Button>
              </div>
            ))}
            <Button
              type='button'
              onClick={() => appendIngredient({ ingredient_name: '', amount: '' })}
            >
              재료 추가
            </Button>
          </div>

          <div className={styles.stepsWrapper}>
            {stepFields.map((field, index) => (
              <div key={field.id}>
                <FormItem className={styles.fieldWrapper}>
                  <FormLabel>{`조리 과정 ${index + 1}`}</FormLabel>
                  <TextField
                    control={form.control}
                    name={`steps.${index}.description`}
                    placeholder='조리 과정을 입력해주세요'
                  />
                </FormItem>
                <FormItem className={styles.fieldWrapper}>
                  <FormLabel>이미지 URL</FormLabel>
                  <TextField
                    control={form.control}
                    name={`steps.${index}.image_url`}
                    placeholder='이미지 URL을 입력해주세요 (선택사항)'
                  />
                </FormItem>
                <Button type='button' onClick={() => removeStep(index)} variant='destructive'>
                  과정 삭제
                </Button>
              </div>
            ))}
            <Button
              type='button'
              onClick={() =>
                appendStep({
                  step_number: stepFields.length + 1,
                  description: '',
                  image_url: '',
                })
              }
            >
              과정 추가
            </Button>
          </div>

          <div className={styles.buttonWrapper}>
            <LoadingButton text='레시피 등록' isPending={isPending} />
          </div>
        </styled.form>
      </Form>
    </main>
  );
}
