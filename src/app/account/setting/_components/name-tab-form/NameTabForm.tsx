import { TabsContent } from '@/components/ui/tabs';
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
import { TextField } from '@/app/(auth)/components/text-field';
import { LoadingButton } from '@/components/common/loading-button';
import { css } from '@/styled-system/css';
import { useChangeName } from '@/app/account/setting/_components/name-tab-form/_hooks/useChangeName';

function NameTabForm() {
  const { handleNameSubmit, nameForm, isUpdating } = useChangeName();

  return (
    <TabsContent value='account'>
      <Card>
        <CardHeader>
          <CardTitle>계정 정보</CardTitle>
          <CardDescription>계정 정보를 변경할 수 있습니다</CardDescription>
        </CardHeader>
        <Form {...nameForm}>
          <CardContent>
            <styled.form onSubmit={nameForm.handleSubmit(handleNameSubmit)} noValidate>
              <TextField
                control={nameForm.control}
                name='name'
                type='text'
                placeholder='닉네임을 입력해주세요'
                size='sm'
              />
            </styled.form>
          </CardContent>
          <CardFooter>
            <LoadingButton
              type='submit'
              className={css({ w: 'full' })}
              isPending={isUpdating}
              onClick={nameForm.handleSubmit(handleNameSubmit)}
            >
              이름 변경
            </LoadingButton>
          </CardFooter>
        </Form>
      </Card>
    </TabsContent>
  );
}

export default NameTabForm;
