import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const profileMenuStyles = {
  wrapper: css({
    position: 'fixed',
    right: '0',
    backgroundColor: 'white',

    // 반응형 속성들
    display: 'block',
    width: { base: 'full', md: '64' },
    height: { base: 'full', md: 'auto' },
    top: { base: '0', md: '16' },

    // md에서만 필요한 스타일
    borderRadius: { base: '0', md: 'lg' },
    boxShadow: { base: 'none', md: 'lg' },
  }),

  menuSection: flex({
    flexDir: 'column',
    gap: '2',
    py: '4',
    px: '3',
    borderBottom: '1px solid',
    borderColor: 'gray.200',
  }),

  menuItem: flex({
    alignItems: 'center',
    gap: '3',
    py: '2',
    px: '4',
    cursor: 'pointer',
    color: 'gray.700',

    _hover: {
      backgroundColor: 'gray.100',
    },
  }),
} as const;

export default profileMenuStyles;
