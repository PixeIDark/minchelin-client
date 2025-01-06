import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const searchDropdownStyles = {
  label: flex({
    w: '72px',
    justifyContent: 'center',
  }),

  icon: css({
    color: 'gray.700',
  }),
} as const;

export default searchDropdownStyles;
