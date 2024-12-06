import { defineRecipe } from '@pandacss/dev';

export const label = defineRecipe({
  className: 'label',
  description: 'Styles for the label component',
  base: {
    textStyle: 'sm',
    lineHeight: 'none',
    fontWeight: 'medium',

    _peerDisabled: {
      cursor: 'not-allowed',
      opacity: '0.7',
    },
  },
});
