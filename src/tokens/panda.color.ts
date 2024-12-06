export const pandaColors = {
  current: { value: 'currentColor' },
  black: { value: '#000' },
  white: { value: '#fff' },
  transparent: { value: 'rgb(0 0 0 / 0)' },

  background: {
    value: '{colors.white}',
    _dark: { value: '{colors.gray.900}' },
  },
  foreground: {
    value: '{colors.gray.900}',
    _dark: { value: '{colors.gray.100}' },
  },
  muted: {
    DEFAULT: { value: '{colors.gray.100}' },
    foreground: { value: '{colors.gray.500}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.800}' },
      foreground: { value: '{colors.gray.400}' },
    },
  },
  card: {
    DEFAULT: { value: '{colors.white}' },
    foreground: { value: '{colors.gray.900}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.800}' },
      foreground: { value: '{colors.gray.100}' },
    },
  },
  popover: {
    DEFAULT: { value: '{colors.white}' },
    foreground: { value: '{colors.gray.900}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.800}' },
      foreground: { value: '{colors.gray.100}' },
    },
  },
  border: {
    value: '{colors.gray.200}',
    _dark: { value: '{colors.gray.700}' },
  },
  input: {
    value: '{colors.gray.200}',
    _dark: { value: '{colors.gray.700}' },
  },
  primary: {
    DEFAULT: { value: '{colors.gray.900}' },
    foreground: { value: '{colors.gray.100}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.100}' },
      foreground: { value: '{colors.gray.900}' },
    },
  },
  secondary: {
    DEFAULT: { value: '{colors.gray.100}' },
    foreground: { value: '{colors.gray.900}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.800}' },
      foreground: { value: '{colors.gray.100}' },
    },
  },
  accent: {
    DEFAULT: { value: '{colors.gray.100}' },
    foreground: { value: '{colors.gray.900}' },
    _dark: {
      DEFAULT: { value: '{colors.gray.800}' },
      foreground: { value: '{colors.gray.100}' },
    },
  },
  destructive: {
    DEFAULT: { value: '#ff0000' },
    foreground: { value: '{colors.gray.100}' },
    _dark: {
      DEFAULT: { value: '#ff0000' },
      foreground: { value: '{colors.gray.100}' },
    },
  },
  ring: {
    value: '{colors.gray.200}',
    _dark: { value: '{colors.gray.800}' },
  },
};
