import { flex } from '@/styled-system/patterns';

const socialLoginsStyles = {
  linksWrapper: flex({
    justifyContent: 'center',
    gap: '3',
    color: 'blue_a',
  }),
} as const;

export default socialLoginsStyles;
