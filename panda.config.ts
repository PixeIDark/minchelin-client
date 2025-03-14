// @ts-ignore
import { defineConfig } from '@pandacss/dev';
import { colors } from '@/tokens/colors';
import { recipes } from '@/components/ui/recipes';

export default defineConfig({
  emitPackage: true,
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  theme: {
    extend: {
      recipes,
      tokens: {
        colors,
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
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
    recipes: {
      // from shadow-panda: toast, 토스트가 css 변형하게 해서 ui 나오게 해줌.
      toast: [{ variant: ['*'] }],
    },
  },

  outdir: 'src/styled-system',
});
