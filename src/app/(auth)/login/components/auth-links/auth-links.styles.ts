import { flex } from '@/styled-system/patterns';

const authLinksStyles = {
  secondaryLinks: flex({
    gap: '3',
    color: 'blue_a',
  }),
} as const;

export default authLinksStyles;
