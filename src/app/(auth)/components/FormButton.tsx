import { Button } from 'antd';
import { useLoginSubmit } from '@/app/(auth)/login/useLoginSubmit';

function FormButton() {
  const { isPending } = useLoginSubmit();

  return (
    <Button type='primary' htmlType='submit' loading={isPending} className='w-full'>
      로그인
    </Button>
  );
}

export default FormButton;
