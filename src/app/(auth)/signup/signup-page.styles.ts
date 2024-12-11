import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

const signupPageStyles = {
  pageWrapper: flex({
    flexDir: 'column',
    maxW: '460',
    mx: 'auto',
    gap: '6',
  }),

  contentWrapper: flex({
    flexDir: 'column',
    gap: '4',
    mt: '3',
  }),

  title: css({
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  }),
} as const;

export default signupPageStyles;
