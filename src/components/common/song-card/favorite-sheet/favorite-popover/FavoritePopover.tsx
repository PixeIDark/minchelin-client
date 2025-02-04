import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

function FavoritePopover() {
  return (
    <Popover modal={true}>
      <PopoverTrigger>즐겨찾기 만들기</PopoverTrigger>
      <PopoverContent side='top'>폼 제출로 할까 뭐로 할까..</PopoverContent>
    </Popover>
  );
}

export default FavoritePopover;
