'use client';

import styles from './profile-menu.styles';
import { Portal } from '@/components/ui/portal';
import { X } from 'lucide-react';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import { useRouter } from 'next/navigation';

interface ProfileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// TODO: "구조 조정 필요"
function ProfileMenu({ isOpen, onClose }: ProfileMenuProps) {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    onClose();
    router.replace(path);
  };

  return (
    <Portal>
      <div className={styles.wrapper} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className={flex({ justifyContent: 'space-between', alignItems: 'center' })}>
          <p>이름</p>
          <X onClick={onClose} />
        </div>
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
      </div>
    </Portal>
  );
}

export default ProfileMenu;
