import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const signupFormStyles = {
  title: css({
    fontSize: 'xl',
    fontWeight: 'bold',
    textAlign: 'center',
    mb: '6',
  }),
  formWrapper: flex({
    flexDir: 'column',
    gap: '3',
  }),
  loadingButton: css({
    w: 'full',
    mt: '2',
  }),
} as const;

export default signupFormStyles;
