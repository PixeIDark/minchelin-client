'use client';

import { useLogout } from '@/queries/auth';
import { LoadingButton } from '@/components/common/loading-button';
import { css } from '@/styled-system/css';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { TextField } from '@/app/(auth)/components/text-field';
import { PasswordField } from '@/app/(auth)/components/password-field';
import { useForm } from 'react-hook-form';
import { UpdateFormData, updateSchema } from '@/lib/zod/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDeleteAccount, useUpdateProfile } from '@/queries/user/mutations';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { flex } from '@/styled-system/patterns';
import { useToast } from '@/components/ui/toast/useToast';

interface AccountFormData {
  name: string; // optional이 아닌 required로 설정
}

interface SecurityFormData {
  password: string;
  passwordConfirm: string;
}

function SettingPage() {
  const { toast } = useToast();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateProfile();
  const { mutate: deleteAccount, isPending: isDeleteAccount } = useDeleteAccount();

  // 계정 정보 form
  const accountForm = useForm<AccountFormData>({
    defaultValues: {
      name: '',
    },
  });

  // securityForm 타입 수정
  const securityForm = useForm<SecurityFormData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  // 닉네임 변경 처리
  const handleNameSubmit = (data: AccountFormData) => {
    updateProfile(
      { name: data.name },
      {
        onSuccess: () => {
          toast({
            title: '닉네임 변경 완료',
            description: '닉네임이 성공적으로 변경되었습니다.',
          });
          accountForm.reset();
        },
        onError: (error) => {
          toast({
            title: '닉네임 변경 실패',
            description:
              error instanceof Error ? error.message : '닉네임 변경 중 오류가 발생했습니다.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  // 비밀번호 변경 처리
  const handlePasswordSubmit = (data: SecurityFormData) => {
    if (data.password !== data.passwordConfirm) {
      toast({
        title: '비밀번호 변경 실패',
        description: '비밀번호가 일치하지 않습니다.',
        variant: 'destructive',
      });
      return;
    }

    updateProfile(
      { password: data.password },
      {
        onSuccess: () => {
          toast({
            title: '비밀번호 변경 완료',
            description: '비밀번호가 성공적으로 변경되었습니다.',
          });
          securityForm.reset();
        },
        onError: (error) => {
          toast({
            title: '비밀번호 변경 실패',
            description:
              error instanceof Error ? error.message : '비밀번호 변경 중 오류가 발생했습니다.',
            variant: 'destructive',
          });
        },
      }
    );
  };

  return (
    <div className={css({ maxW: '460px', mx: 'auto', mt: '6', px: '4' })}>
      <h1 className={css({ fontSize: '24px', fontWeight: 'bold', mb: '6' })}>계정 설정</h1>
      <Tabs defaultValue='account' className={css({ w: 'full' })}>
        <TabsList className={flex()}>
          <TabsTrigger value='account' className={css({ w: '1/2' })}>
            계정 정보
          </TabsTrigger>
          <TabsTrigger value='security' className={css({ w: '1/2' })}>
            보안
          </TabsTrigger>
        </TabsList>

        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <CardTitle>계정 정보</CardTitle>
              <CardDescription>계정 정보를 변경할 수 있습니다</CardDescription>
            </CardHeader>
            <Form {...accountForm}>
              <CardContent>
                <styled.form onSubmit={accountForm.handleSubmit(handleNameSubmit)} noValidate>
                  <TextField
                    control={accountForm.control}
                    name='name'
                    type='text'
                    placeholder='닉네임을 입력해주세요'
                  />
                </styled.form>
              </CardContent>
              <CardFooter>
                <LoadingButton
                  type='submit'
                  className={css({ w: 'full' })}
                  isPending={isUpdating}
                  onClick={accountForm.handleSubmit(handleNameSubmit)}
                >
                  저장
                </LoadingButton>
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>

        <TabsContent value='security'>
          <Card>
            <CardHeader>
              <CardTitle>보안</CardTitle>
              <CardDescription>비밀번호를 변경하거나 계정을 관리할 수 있습니다</CardDescription>
            </CardHeader>
            <Form {...securityForm}>
              <CardContent>
                <styled.form
                  onSubmit={securityForm.handleSubmit(handlePasswordSubmit)}
                  noValidate
                  className={css({ display: 'flex', flexDir: 'column', gap: '3' })}
                >
                  <PasswordField
                    control={securityForm.control}
                    name='password'
                    placeholder='새 비밀번호를 입력해주세요'
                  />
                  <PasswordField
                    control={securityForm.control}
                    name='passwordConfirm'
                    placeholder='새 비밀번호를 다시 입력해주세요'
                  />
                </styled.form>
              </CardContent>
              <CardFooter className={css({ flexDir: 'column', gap: '2' })}>
                <LoadingButton
                  type='submit'
                  className={css({ w: 'full' })}
                  isPending={isUpdating}
                  onClick={securityForm.handleSubmit(handlePasswordSubmit)}
                >
                  비밀번호 변경
                </LoadingButton>
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
              </CardFooter>
            </Form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default SettingPage;
