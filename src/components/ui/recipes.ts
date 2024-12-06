import {
  card,
  cardContent,
  cardDescription,
  cardFooter,
  cardHeader,
  cardTitle,
} from '@/components/ui/card/recipe';
import {
  formControl,
  formDescription,
  formItem,
  formLabel,
  formMessage,
} from '@/components/ui/form/recipe';
import { label } from '@/components/ui/label/recipe';
import { input } from '@/components/ui/input/recipe';
import { toast } from '@/components/ui/toast/slot-recipe';
import { toastViewport } from '@/components/ui/toast/recipe';
import { button } from '@/components/ui/button/recipe';

export const recipes = {
  button,
  card,
  cardHeader,
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  formLabel,
  formItem,
  formControl,
  formDescription,
  formMessage,
  input,
  label,
  toast,
  toastViewport,
} as const;
