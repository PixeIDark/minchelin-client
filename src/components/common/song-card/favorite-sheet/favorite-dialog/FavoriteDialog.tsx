import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TextField } from '@/app/(auth)/components/text-field';
import { Form } from '@/components/ui/form';
import { DialogClose } from '@radix-ui/react-dialog';
import { css } from '@/styled-system/css';
import { LoadingButton } from '@/components/common/loading-button';
import styles from './favorite-dialog.styles';
import { useFavoriteDialog } from '@/components/common/song-card/favorite-sheet/favorite-dialog/_hooks/useFavoriteDialog';

function FavoriteDialog() {
  const { isOpen, isPending, createFavoriteList, toggleOpenChange, form } = useFavoriteDialog();

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={toggleOpenChange}>
      <DialogTrigger asChild>
        <Button type='button'>즐겨찾기 만들기</Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => createFavoriteList(data.name))}>
            <DialogHeader className={styles.header}>
              <DialogTitle>새 즐겨찾기</DialogTitle>
            </DialogHeader>
            <TextField
              control={form.control}
              name='favorite name'
              placeholder='이름을 입력해주세요'
              size='sm'
            />
            <DialogFooter className={styles.footer}>
              <DialogClose asChild>
                <Button type='button' variant='ghost' className={css({ w: 'full' })}>
                  취소
                </Button>
              </DialogClose>
              <LoadingButton isPending={isPending} type='submit' className={styles.button}>
                만들기
              </LoadingButton>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default FavoriteDialog;
