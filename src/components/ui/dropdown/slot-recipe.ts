import { defineSlotRecipe } from '@pandacss/dev';

export const dropdown = defineSlotRecipe({
  className: 'dropdown',
  description: '드롭다운 메뉴를 위한 스타일',
  slots: ['root', 'trigger', 'menu', 'item'],
  base: {
    root: {
      position: 'relative',
      display: 'inline-block',
    },
    trigger: {
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2',
    },
    menu: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '50',
      marginTop: '2',
      width: '56',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: 'md',
      boxShadow: 'lg',
      py: '1',

      '&[data-state=closed]': {
        display: 'none',
      },
      '&[data-state=open]': {
        display: 'block',
      },
    },
    item: {
      py: '2',
      textStyle: 'sm',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      width: 'full',

      _hover: {
        backgroundColor: 'gray.100',
      },

      '&[data-selected=true]': {
        backgroundColor: 'blue.50',
        color: 'blue.700',
      },
    },
  },
  variants: {
    size: {
      sm: {
        trigger: { h: '8', px: '3', textStyle: 'sm' },
        item: { py: '1', textStyle: 'sm' },
      },
      md: {
        trigger: { h: '10', px: '4', textStyle: 'base' },
        item: { py: '2', textStyle: 'base' },
      },
      lg: {
        trigger: { h: '12', px: '5', textStyle: 'lg' },
        item: { py: '3', textStyle: 'lg' },
      },
      search: {
        trigger: {
          h: 'full',
          w: '81px',
          textStyle: 'm',
        },
        item: {
          textStyle: 'md',
        },
      },
    },
    variant: {
      outline: {
        trigger: {
          border: '1px solid',
          borderColor: 'gray.200',
          _hover: { borderColor: 'gray.300' },
        },
      },
      ghost: {
        trigger: {
          _hover: { backgroundColor: 'gray.100' },
        },
      },
      search: {
        trigger: {
          px: '0',
        },
        menu: {
          left: '-1.5',
          w: '88px',
          marginTop: '1',
          borderRadius: '0',
        },
        item: {
          justifyContent: 'center',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  staticCss: [{ size: ['*'], variant: ['*'] }],
});
