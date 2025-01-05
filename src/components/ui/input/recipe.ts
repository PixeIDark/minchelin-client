import { defineRecipe } from '@pandacss/dev';

export const input = defineRecipe({
  className: 'input',
  description: 'Styles for the input component',
  base: {
    display: 'flex',
    w: 'full',
    rounded: 'sm',
    border: '1px solid token(colors.gray.100)',
    bg: 'background',
    h: '14',
    px: '3',
    py: '2',
    textStyle: 'sm',

    _file: {
      border: 'none',
      bg: 'transparent',
      textStyle: 'sm',
      fontWeight: 'medium',
    },

    _placeholder: {
      color: 'place_h',
    },

    _focusVisible: {
      // outline: '2px solid transparent',
      outline: '2px solid token(colors.gray.300)',
      outlineOffset: '2px',
      // focusRingWidth: '2',
      // focusRingColor: 'ring',
      // focusRingOffsetWidth: '2',
    },

    _disabled: {
      cursor: 'not-allowed',
      opacity: '0.5',
    },
  },
  variants: {
    size: {
      // default: {
      //   h: '14',
      // },
      sm: {
        h: '38px',
      },
      // lg: {
      //    px: '8',
      // },
      // icon: {
      //   h: '10',
      //   w: '10',
      // },
    },
    variants: {
      ghost: {
        _focusVisible: {
          // outline: '2px solid transparent',
          outline: 'none',
        },
      },
      imaginary: {
        border: 'none',
        _focusVisible: {
          outline: 'none',
        },
      },
    },
  },
  staticCss: [{ size: ['*'] }],
});
