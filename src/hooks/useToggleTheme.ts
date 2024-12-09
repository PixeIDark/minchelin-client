import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '@/utils/clientCookies';
import { getTheme, injectTheme } from '@/styled-system/themes';

export function useToggleTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    const themeData = await getTheme(newTheme);
    injectTheme(document.documentElement, themeData);
    setCookie('theme', newTheme, 7);
  };

  useEffect(() => {
    const savedTheme = getCookie('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return { theme, toggleTheme };
}
