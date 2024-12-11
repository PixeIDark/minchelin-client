import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const signupFormStyles = {
  formWrapper: flex({
    flexDir: 'column',
    gap: '3',
  }),
  loadingButton: css({
    w: 'full',
    mt: '6',
  }),
} as const;

export default signupFormStyles;
