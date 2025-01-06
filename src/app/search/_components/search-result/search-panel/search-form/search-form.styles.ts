import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const searchFormStyles = {
  form: flex({
    alignItems: 'center',
    w: 'full',
  }),

  input: css({
    w: 'full',
    h: 'full',
    textStyle: 'md',
  }),
} as const;

export default searchFormStyles;
