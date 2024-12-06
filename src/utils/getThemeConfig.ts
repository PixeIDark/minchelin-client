import { cookies } from 'next/headers';
import { getTheme } from '@/styled-system/themes';

export async function getThemeConfig() {
  const store = cookies();
  const themeName = (store.get('theme')?.value as 'light' | 'dark') || 'light';
  const theme = await getTheme(themeName);

  return {
    themeName,
    theme,
  };
}
