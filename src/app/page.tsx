'use client';
import { Button } from 'antd';
import { useToggleTheme } from '@/hooks/useToggleTheme';
import { center, vstack } from '@/styled-system/patterns';
import { useLogout } from '@/hooks/auth-mutation/useLogout';

function Home() {
  const { theme, toggleTheme } = useToggleTheme();
  const { mutate: logout, isPending } = useLogout();

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
        <Button style={{ width }} type='link' onClick={() => logout()} loading={isPending}>
          로그아웃
        </Button>
      </div>
    </div>
  );
}

export default Home;
