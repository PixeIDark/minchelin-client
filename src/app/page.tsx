'use client';
import { Button } from 'antd';
import { center, vstack } from '../../styled-system/patterns';
import { useState, useEffect } from 'react';
import { getTheme, injectTheme } from '../../styled-system/themes';
import { getCookie, setCookie } from '@/utils/clientCookies';

function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // 테마 변경 및 쿠키 저장
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

  const width = '120px';

  return (
    <div className={center({ height: '100vh' })}>
      <div className={vstack()}>
        <Button style={{ width }} type='primary' onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
        <Button style={{ width }} href={'./login'}>
          ./login
        </Button>
        <Button style={{ width }} type='dashed'>
          Dashed Button
        </Button>
        <Button style={{ width }} type='text'>
          Text Button
        </Button>
        <Button style={{ width }} type='link' href='/login'>
          Link Button
        </Button>
      </div>
    </div>
  );
}

export default Home;
