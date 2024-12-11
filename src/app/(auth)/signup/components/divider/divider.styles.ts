import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const dividerStyles = {
  wrapper: flex({
    alignItems: 'center',
    gap: '2',
  }),

  line: css({
    h: '1px',
    bg: 'gray.200',
    w: 'full',
  }),

  text: css({
    color: 'gray.200',
  }),
} as const;

export default dividerStyles;
