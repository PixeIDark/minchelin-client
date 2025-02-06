import { useEffect, useState } from 'react';
import { useCreateFavoriteList } from '@/queries/favorite';
import { FavoriteFormData, favoriteSchema } from '@/lib/zod/favorite';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export function useFavoriteDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<FavoriteFormData>({
    defaultValues: { name: '' },
    resolver: zodResolver(favoriteSchema),
  });

  const { mutate: createFavoriteList, isPending, isSuccess } = useCreateFavoriteList();

  useEffect(() => {
    if (isSuccess) {
      setIsOpen(false);
      form.reset();
    }
  }, [isSuccess, form]);

  const toggleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) form.reset();
  };

  return {
    isOpen,
    toggleOpenChange,
    form,
    createFavoriteList,
    isPending,
  };
}
