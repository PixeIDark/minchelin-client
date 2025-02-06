import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const favoriteDialogStyles = {
  header: css({ mb: '4' }),
  footer: flex({ flexDir: 'row', gap: '4', w: 'full', mt: '4' }),
  button: css({ w: 'full' }),
} as const;

export default favoriteDialogStyles;
