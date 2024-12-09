import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const loginFormStyles = {
  formWrapper: flex({
    flexDir: 'column',
    gap: '4',
  }),

  loadingButton: css({
    w: 'full',
    mt: '2',
  }),
} as const;

export default loginFormStyles;
