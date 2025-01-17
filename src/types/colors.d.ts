declare module '@pandacss/types' {
  export interface DefaultTokens {
    colors: {
      // Custom Colors
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      blue_a: string;
      place_h: string;
      guiding: string;
      luring: string;

      tj: string;
      ky: string;

      // Shadow Panda Colors
      current: string;
      black: string;
      white: string;
      transparent: string;

      background: {
        value: string;
        _dark: string;
      };
      foreground: {
        value: string;
        _dark: string;
      };
      muted: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      card: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      popover: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      border: {
        value: string;
        _dark: string;
      };
      input: {
        value: string;
        _dark: string;
      };
      primary: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      secondary: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      accent: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      destructive: {
        DEFAULT: string;
        foreground: string;
        _dark: {
          DEFAULT: string;
          foreground: string;
        };
      };
      ring: {
        value: string;
        _dark: string;
      };
    };
  }
}
