import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const searchPanelStyles = {
  wrapper: flex({
    h: '14',
    border: '2px solid',
    borderColor: 'gray.600',
    backgroundColor: 'gray.100',
    py: '1',
    px: '0.5',
    position: 'fixed',
    top: '14',
    left: '0',
    right: '0',
  }),

  form: flex({
    alignItems: 'center',
    w: 'full',
    borderLeft: '1px solid',
    borderColor: 'gray.600',
  }),

  input: css({
    w: 'full',
    h: 'full',
    backgroundColor: 'gray.100',
    textStyle: 'md',
  }),

  buttonWrapper: css({
    width: '20',
    backgroundColor: 'gray.600',
    borderRadius: '0',
  }),
} as const;

export default searchPanelStyles;
