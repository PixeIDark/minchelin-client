import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const searchSortByStyles = {
  wrapper: flex({
    gap: '3',
    color: 'gray.700',
  }),

  divider: css({
    w: '1px',
    h: 'full',
    borderColor: 'gray.700',
  }),

  button: (isActive: boolean) =>
    css({
      color: isActive ? 'blue_a' : 'gray.700',
    }),
} as const;

export default searchSortByStyles;
