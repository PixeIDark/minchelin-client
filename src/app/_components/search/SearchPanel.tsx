import { Input } from '@/components/ui/input';
import { flex } from '@/styled-system/patterns';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchParams } from '@/types/search';
import { css } from '@/styled-system/css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { createQueryString } from '@/utils/createQueryString';

// TODO: dropdown 스타일은 자유롭게, 기능만 정해서 만들기
// TODO: url 에 데이터 넣고, search 페이지에서 모두 처리
// TODO: text 비어 있을 경우 입력 해달라고 아우성 치기
function SearchPanel({ onSearchToggle }: { onSearchToggle: () => void }) {
  const router = useRouter();
  // TODO: 완성 후 constant로 분리
  const [searchParams, setSearchParams] = useState<SearchParams>({
    text: '',
    sort: 'latest',
    searchType: 'both',
  });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 이걸 안하면 페이지가 새로고침됨
    router.push(`/search?${createQueryString(searchParams)}`);
    onSearchToggle();
  };

  return (
    <div
      className={flex({
        h: '14',
        border: '2px solid',
        borderColor: 'gray.600',
        backgroundColor: 'gray.100',
        p: '1',
        position: 'fixed',
        top: '14',
        right: '6',
      })}
    >
      <div>sort-by</div>
      <form className={flex({ alignItems: 'center', w: 'full' })} onSubmit={handleSubmit}>
        <Input
          className={css({ w: 'full', h: 'full', backgroundColor: 'gray.100' })}
          placeholder='검색'
          value={searchParams.text}
          onChange={handleChangeText}
        />
        <div>
          <Button
            className={css({
              width: '20',
              backgroundColor: 'gray.600',
              borderRadius: '0',
            })}
            size='m'
          >
            검색
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchPanel;
