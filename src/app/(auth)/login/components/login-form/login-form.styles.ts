import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const loginFormStyles = {
  formWrapper: flex({
    flexDir: 'column',
    gap: '4',
    maxW: '460',
    mx: 'auto',
    mt: '40',
  }),

  loadingButton: css({
    w: 'full',
    mt: '2',
  }),

  secondaryLinks: flex({
    gap: '3',
    color: 'blue_a',
  }),
} as const;

export default loginFormStyles;
