import { defineSlotRecipe } from '@pandacss/dev';

export const checkbox = defineSlotRecipe({
  className: 'checkbox',
  description: 'Styles for the Checkbox component',
  slots: ['root', 'indicator'],
  base: {
    root: {
      h: '4',
      w: '4',
      flexShrink: '0',
      rounded: 'sm',
      border: '1px solid',
      borderColor: 'gray.200',
      cursor: 'pointer',
      focusRingOffsetColor: 'background',
      bg: 'white',

      _focusVisible: {
        outline: '2px solid transparent',
        outlineOffset: '2px',
        focusRingWidth: '2',
        focusRingColor: 'ring',
        focusRingOffsetWidth: '2',
      },

      _disabled: {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      '&[data-state="checked"]': {
        bg: 'blue.600',
        borderColor: 'blue.600',
        color: 'primary.foreground',
      },
    },
    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'currentColor',
    },
  },
});
