import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { css } from '@/styled-system/css';
import { CircleUserRound } from 'lucide-react';
import { flex } from '@/styled-system/patterns';
import { useRouter } from 'next/navigation';

function ProfileSheet({ userName }: { userName: string }) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.replace(path);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CircleUserRound size={40} strokeWidth={1} className={css({ color: 'blue.600' })} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{userName} The First!</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className={flex({ flexDir: 'column' })}>
          <button onClick={() => handleNavigate('/account/setting')} className={flex({ gap: '4' })}>
            <p>아이콘</p>
            <p>계정 설정</p>
          </button>
          <button className={flex({ gap: '4' })}>
            <p>아이콘</p>
            <p>즐겨찾기</p>
          </button>
          <button className={flex({ gap: '4' })}>
            <p>아이콘</p>
            <p>히스토리</p>
          </button>
          <button className={flex({ gap: '4' })}>
            <p>아이콘</p>
            <p>로그아웃</p>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ProfileSheet;
