import { defineConfig } from '@pandacss/dev';
import { colors } from '@/tokens/colors';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors,
      },
    },
  },

  themes: {
    light: {
      tokens: {
        colors: {
          background: { value: '{colors.guiding}' },
          border: { value: '{colors.blue.800}' },
        },
      },
    },
    dark: {
      tokens: {
        colors: {
          background: { value: '{colors.luring}' },
          border: { value: '{colors.blue.200}' },
        },
      },
    },
  },

  // css 객체를 제거하고 직접 themes 배열을 설정 => styled-system 에 필요한 함수와 객체가 저장되서 꺼내쓸 수 있음.
  staticCss: {
    themes: ['light', 'dark'],
  },

  outdir: 'src/styled-system',
});
