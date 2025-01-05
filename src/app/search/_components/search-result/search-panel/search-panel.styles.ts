import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const searchPanelStyles = {
  wrapper: (isOpen: boolean) =>
    flex({
      h: '10',
      border: '1px solid',
      alignItems: 'center',
      borderRadius: isOpen ? '16px 16px 16px 0px' : '16px 16px 16px 16px',
      borderColor: isOpen ? 'blue_a' : 'gray.700',
      _focusWithin: {
        borderColor: 'blue_a',
      },
      py: '1',
      px: '3',
      color: 'gray.700',
    }),

  form: flex({
    alignItems: 'center',
    w: 'full',
  }),

  input: css({
    w: 'full',
    h: 'full',
    textStyle: 'md',
  }),
} as const;

export default searchPanelStyles;
