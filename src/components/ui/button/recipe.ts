import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'Styles for the button component',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: 'sm',
    textStyle: 'sm',
    fontWeight: 'medium',
    transition: 'colors',
    cursor: 'pointer',
    ringOffset: 'background',
    gap: '2',
    border: '1px solid token(colors.blue.900)',

    _focusVisible: {
      outline: '2px solid transparent',
      outlineOffset: '2px',
      ringWidth: '2',
      ringColor: 'ring',
      ringOffset: '2',
    },

    _disabled: {
      pointerEvents: 'none',
      opacity: '50%',
    },
  },
  variants: {
    variant: {
      default: {
        // bg: 'primary',
        bg: 'blue.800',
        // color: 'primary.foreground',
        color: 'white',

        // _focus: {
        //   '&:not(:disabled)': {
        //     bg: 'blue.900',
        //   },

        _hover: {
          bga: 'primary/90',
          '&:not(:disabled)': {
            opacity: '0.9',
          },
          boxShadow: 'md',
        },
      },
      destructive: {
        bg: 'destructive',
        color: 'destructive.foreground',

        _hover: {
          bga: 'destructive/90',
        },
      },
      outline: {
        border: 'input',
        bg: 'background',

        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      secondary: {
        bg: 'secondary',
        color: 'secondary.foreground',

        _hover: {
          bga: 'secondary/90',
        },
      },
      ghost: {
        _hover: {
          bg: 'accent',
          color: 'accent.foreground',
        },
      },
      link: {
        color: 'primary',
        textUnderlineOffset: '4px',

        _hover: {
          textDecoration: 'underline',
        },
      },
      passwordToggle: {
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        bg: 'transparent',
        border: 'none',
      },
    },
    size: {
      default: {
        h: '10',
        py: '2',
      },
      sm: {
        h: '9',
        // rounded: 'md',
      },
      m: {
        h: '12',
        py: '3',
      },
      lg: {
        h: '52px',
        // rounded: 'md',
        // px: '8',
      },
      icon: {
        h: '10',
        w: '10',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
  staticCss: [{ size: ['*'] }],
});
