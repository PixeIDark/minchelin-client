import { defineRecipe } from '@pandacss/dev';

export const icon = defineRecipe({
  className: 'icon',
  description: 'Styles for icons that can be directly applied to components',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    w: '4', // Checkbox의 기본 크기에 맞춤
    h: '4', // Checkbox의 기본 크기에 맞춤
  },
  variants: {
    size: {
      xl: { w: '8', h: '8' },
      lg: { w: '6', h: '6' },
      md: { w: '5', h: '5' },
      sm: { w: '4', h: '4' },
      xs: { w: '3', h: '3' },
    },
    left: {
      none: { ml: '0' },
      sm: { ml: '2' },
      auto: { ml: 'auto' },
    },
    right: {
      none: { mr: '0' },
      sm: { mr: '2' },
      auto: { mr: 'auto' },
    },
    fillCurrent: {
      true: { color: 'currentColor' },
    },
    dimmed: {
      true: { opacity: '0.6' },
    },
  },
  defaultVariants: {
    size: 'sm', // Checkbox 내부에서 사용될 때 적절한 크기로 수정
    left: 'none',
    right: 'none',
    fillCurrent: true, // Checkbox에서는 currentColor를 기본으로 사용
    dimmed: false,
  },
});
