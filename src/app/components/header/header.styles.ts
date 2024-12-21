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

  userIcon: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '1px solid',
    borderColor: 'gray.200',
    mr: '2',
  }),
} as const;

export default headerStyles;
