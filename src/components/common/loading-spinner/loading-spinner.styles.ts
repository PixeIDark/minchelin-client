import { css } from '@/styled-system/css';

export const styles = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    py: '4',
    color: 'gray.500',
  }),

  spinner: css({
    animation: 'spin',
  }),
} as const;
