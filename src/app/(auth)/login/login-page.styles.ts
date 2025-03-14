import { flex } from '@/styled-system/patterns';

const loginPageStyles = {
  pageWrapper: flex({
    flexDir: 'column',
    maxW: '460',
    mx: 'auto',
    mt: '120px',
    gap: '4',
  }),
} as const;

export default loginPageStyles;
