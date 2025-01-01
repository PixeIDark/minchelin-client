import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const headerStyles = {
  wrapper: css({
    display: { md: 'none' },
    borderBottom: '1px solid',
    borderColor: 'gray.200',
    mx: '-4',
  }),

  container: flex({
    my: '2',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),

  rightItem: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'gray.200',
    mr: '2',
  }),
} as const;

export default headerStyles;
