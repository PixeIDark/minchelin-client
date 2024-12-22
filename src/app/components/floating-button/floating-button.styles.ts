import { css } from '@/styled-system/css';

const floatingButtonStyles = {
  button: css({
    position: 'fixed',
    bottom: '20',
    right: '4',
    zIndex: '50',
    borderRadius: 'full',
    bg: 'primary',
    p: '4',
    boxShadow: 'lg',
    _hover: {
      transform: 'scale(1.05)',
      bg: 'primary._dark.DEFAULT',
    },
    transition: 'all',
    transitionDuration: '200ms',
  }),

  icon: css({
    h: '6',
    w: '6',
    color: 'primary.foreground',
  }),
} as const;

export default floatingButtonStyles;
