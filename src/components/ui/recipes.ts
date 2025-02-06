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
import { icon } from '@/components/ui/icon/recipe';
import { checkbox } from '@/components/ui/checkbox/slot-recipe';
import { dropdown } from '@/components/ui/dropdown/slot-recipe';
import { sheet } from '@/components/ui/sheet/slot-recipe';
import { popover } from '@/components/ui/popover/slot-recipe';
import { dialog } from '@/components/ui/dialog/slot-recipe';

export const recipes = {
  button,
  card,
  cardHeader,
  cardTitle,
  cardDescription,
  cardContent,
  cardFooter,
  checkbox,
  dropdown,
  dialog,
  formLabel,
  formItem,
  formControl,
  formDescription,
  formMessage,
  input,
  icon,
  label,
  popover,
  toast,
  toastViewport,
  sheet,
} as const;
