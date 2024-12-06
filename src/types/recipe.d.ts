declare module '@pandacss/dev' {
  interface CssProperties {
    [key: string]: DefaultTokens['colors'] | string | number;
  }
}
