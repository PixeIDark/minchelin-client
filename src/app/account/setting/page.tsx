'use client';

import { useLogout } from '@/queries/auth';
import { LoadingButton } from '@/components/common/loading-button';
import { css } from '@/styled-system/css';
import { useDeleteAccount } from '@/queries/user/mutations';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { flex } from '@/styled-system/patterns';
import { NameTabForm } from '@/app/account/setting/_components/name-tab-form';
import { PasswordTabForm } from '@/app/account/setting/_components/password-tab-form';

function SettingPage() {
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const { mutate: deleteAccount, isPending: isDeleteAccount } = useDeleteAccount();

  return (
    <div className={css({ maxW: '460px', mx: 'auto', mt: '6', px: '4' })}>
      <h1 className={css({ fontSize: '24px', fontWeight: 'bold', mb: '6' })}>계정 설정</h1>
      <Tabs defaultValue='account' className={css({ w: 'full' })}>
        <TabsList className={flex()}>
          <TabsTrigger value='account' className={css({ w: '1/2' })}>
            이름 변경
          </TabsTrigger>
          <TabsTrigger value='security' className={css({ w: '1/2' })}>
            비밀번호 변경
          </TabsTrigger>
        </TabsList>
        <NameTabForm />
        <PasswordTabForm />
      </Tabs>
      <div className={flex({ flexDir: 'column', gap: '4', mt: '6' })}>
        <LoadingButton
          onClick={() => logout()}
          isPending={isLoggingOut}
          className={css({ w: 'full' })}
        >
          로그아웃
        </LoadingButton>
        <LoadingButton
          onClick={() => deleteAccount()}
          className={css({ w: 'full' })}
          variant='destructive'
          isPending={isDeleteAccount}
        >
          회원 탈퇴
        </LoadingButton>
      </div>
    </div>
  );
}

export default SettingPage;
