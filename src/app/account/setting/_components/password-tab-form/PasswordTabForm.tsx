import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { styled } from '@/styled-system/jsx';
import { css } from '@/styled-system/css';
import { PasswordField } from '@/app/(auth)/components/password-field';
import { LoadingButton } from '@/components/common/loading-button';
import { TabsContent } from '@/components/ui/tabs';
import { useChangePassword } from '@/app/account/setting/_components/password-tab-form/hooks/useChangePassword';

function PasswordTabForm() {
  const { handlePasswordSubmit, passwordForm, isUpdating } = useChangePassword();

  return (
    <TabsContent value='security'>
      <Card>
        <CardHeader>
          <CardTitle>보안</CardTitle>
          <CardDescription>비밀번호를 변경하거나 계정을 관리할 수 있습니다</CardDescription>
        </CardHeader>
        <Form {...passwordForm}>
          <CardContent>
            <styled.form
              onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}
              noValidate
              className={css({ display: 'flex', flexDir: 'column', gap: '3' })}
            >
              <PasswordField
                control={passwordForm.control}
                name='password'
                placeholder='새 비밀번호를 입력해주세요'
                size='sm'
              />
              <PasswordField
                control={passwordForm.control}
                name='passwordConfirm'
                placeholder='새 비밀번호를 다시 입력해주세요'
                size='sm'
              />
            </styled.form>
          </CardContent>
          <CardFooter className={css({ flexDir: 'column', gap: '2' })}>
            <LoadingButton
              type='submit'
              className={css({ w: 'full' })}
              isPending={isUpdating}
              onClick={passwordForm.handleSubmit(handlePasswordSubmit)}
            >
              비밀번호 변경
            </LoadingButton>
          </CardFooter>
        </Form>
      </Card>
    </TabsContent>
  );
}

export default PasswordTabForm;
