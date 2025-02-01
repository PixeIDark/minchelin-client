import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const settingStyles = {
  wrapper: flex({
    flexDir: 'column',
    gap: '6',
    maxW: '460',
    mx: 'auto',
    mt: '6',
    px: '4',
  }),

  title: css({
    fontSize: '24px',
    fontWeight: 'bold',
  }),

  buttonGroup: flex({
    flexDir: 'column',
    gap: '2',
  }),
} as const;

export default settingStyles;
