import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

const songCardStyles = {
  wrapper: flex({
    py: '4',
    gap: '4',
    alignItems: 'center',
    w: 'full',
  }),

  imageContainer: css({
    minW: '11',
    h: '11',
  }),

  image: css({
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    objectFit: 'fill',
  }),

  contentWrapper: flex({
    w: 'full',
    h: 'full',
    justifyContent: 'space-between',
  }),

  textContent: flex({
    flexDir: 'column',
    justifyContent: 'space-between',
  }),

  title: css({
    fontSize: '18px',
    fontWeight: 'bold',
    maxW: 'calc(152px + (187 - 152) * ((100vw - 365px) / (400 - 365)))',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),

  artist: css({
    color: 'gray.400',
    fontSize: '14px',
    maxW: 'calc(152px + (187 - 152) * ((100vw - 365px) / (400 - 365)))',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),

  karaokeWrapper: flex({
    flexDir: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),

  tjNumber: flex({
    gap: '2',
    color: 'tj',
    fontWeight: 'semibold',
  }),

  kyNumber: flex({
    gap: '2',
    color: 'ky',
    fontWeight: 'semibold',
  }),

  numberWidth: css({
    width: '48px',
  }),

  noNumber: css({
    pr: '4',
  }),

  container: flex({
    borderBottom: '1px Solid',
    borderColor: 'gray.100',
  }),
} as const;

export default songCardStyles;
