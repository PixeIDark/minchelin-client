import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const headerStyles = {
  headerSpacer: css({
    h: '57px',
  }),

  wrapper: css({
    display: { md: 'none' },
    position: 'fixed',
    top: '0px',
    borderBottom: '1px solid',
    borderColor: 'gray.200',
    backgroundColor: 'white',
    w: 'full',
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
