import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const signupPageStyles = {
  pageWrapper: flex({
    flexDir: 'column',
    maxW: '460',
    mx: 'auto',
    gap: '4',
  }),

  title: css({
    fontSize: 'xl',
    fontWeight: 'bold',
    textAlign: 'center',
    mb: '6',
  }),
} as const;

export default signupPageStyles;
