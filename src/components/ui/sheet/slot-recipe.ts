import { defineSlotRecipe } from '@pandacss/dev';

export const sheet = defineSlotRecipe({
  className: 'sheet',
  description: 'Styles for the Sheet component',
  slots: [
    'root',
    'trigger',
    'close',
    'portal',
    'overlay',
    'header',
    'footer',
    'title',
    'description',
    'content',
    'contentClose',
  ],
  base: {
    overlay: {
      position: 'fixed',
      inset: '0',
      zIndex: '50',
      opacity: '0.7',
      bg: 'black',

      '&[data-state=open]': {
        animateIn: true,
        fadeIn: 0,
      },

      '&[data-state=closed]': {
        animateOut: true,
        fadeOut: 0,
      },
    } as any,
    content: {
      borderRadius: '8',
      position: 'fixed',
      zIndex: '50',
      gap: '4',
      bg: 'background',
      p: '4',
      shadow: 'lg',
      transition: 'common',
      transitionTimingFunction: 'ease-in-out',

      '&[data-state=open]': {
        animateIn: true,
        transitionDuration: '500ms',
      },

      '&[data-state=closed]': {
        animateOut: true,
        transitionDuration: '300ms',
      },
    } as any,
    contentClose: {
      cursor: 'pointer',
      position: 'absolute',
      right: '4',
      top: '4',
      rounded: 'sm',
      opacity: '0.7',
      focusRingOffsetColor: 'background',
      transition: 'opacity',

      _hover: {
        opacity: '1',
      },

      _focus: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        pointerEvents: 'none',
      },

      '&[data-state=open]': {
        bg: 'secondary',
      },
    } as any,
    header: {
      display: 'flex',
      flexDirection: 'column',
      spaceY: '2',
      textAlign: 'center',
      md: {
        textAlign: 'left',
      },
    },
    footer: {
      display: 'flex',
      flexDirection: 'column-reverse',
      md: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        spaceX: '2',
      },
    },
    title: {
      textStyle: 'lg',
      fontWeight: 'semibold',
      color: 'foreground',
      textAlign: 'left',
    },
    description: {
      textStyle: 'sm',
      color: 'muted.foreground',
    },
  },
  variants: {
    side: {
      top: {
        content: {
          insetX: '0',
          top: '0',
          borderBottom: 'base',

          '&[data-state=open]': {
            slideInFromTop: '100%',
          },

          '&[data-state=closed]': {
            slideOutToTop: '100%',
          },
        },
      },
      bottom: {
        content: {
          insetX: '0',
          bottom: '5',
          borderTop: 'base',
          mx: 'auto',
        },

        footer: {
          display: 'flex',
          flexDirection: 'column-reverse',
          md: {
            flexDirection: 'column-reverse',
            justifyContent: 'center',
          },

          '&[data-state=open]': {
            slideInFromBottom: '100%',
          },

          '&[data-state=closed]': {
            slideOutToBottom: '100%',
          },
        },
      },
      left: {
        content: {
          insetY: '0',
          left: '0',
          h: 'full',
          w: '3/4',
          borderRight: 'base',
          borderLeftRadius: '0',

          md: {
            maxW: 'sm',
          },

          '&[data-state=open]': {
            slideInFromLeft: '100%',
          },

          '&[data-state=closed]': {
            slideOutToLeft: '100%',
          },
        },
      },
      right: {
        content: {
          insetY: '0',
          right: '0',
          h: 'full',
          w: '3/4',
          borderLeft: 'base',
          borderRightRadius: '0',

          md: {
            maxW: 'sm',
          },

          '&[data-state=open]': {
            slideInFromRight: '100%',
          },

          '&[data-state=closed]': {
            slideOutToRight: '100%',
          },
        },
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
  staticCss: [{ size: ['*'], variant: ['*'] }],
});
