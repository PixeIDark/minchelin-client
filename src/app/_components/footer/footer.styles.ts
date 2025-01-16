import { css } from '@/styled-system/css';

const footerStyles = {
  footerSpacer: css({
    h: '63px',
  }),

  wrapper: css({
    display: { base: 'flex', md: 'none' },
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTop: '1px solid',
    borderColor: 'gray.200',
    position: 'fixed',
    bottom: '0',
    w: 'full',
    h: '16',
    mx: '-4',
    px: '4',
  }),
} as const;

export default footerStyles;
