import { Input } from '@/components/ui/input';
import { flex } from '@/styled-system/patterns';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchParams } from '@/types/search';
import { css } from '@/styled-system/css';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { createQueryString } from '@/utils/createQueryString';
import { SearchDropdown } from '@/app/_components/search/search-dropdown';

// TODO: text 비어 있을 경우 입력 해달라고 아우성 치기
// TODO: home 과 search 에서만 떠야함.
function SearchPanel({ onSearchToggle }: { onSearchToggle: () => void }) {
  const router = useRouter();
  // TODO: 완성 후 constant로 분리
  const [searchType, setSearchType] = useState<SearchParams['searchType']>('both');
  const [searchText, setSearchText] = useState('');
  const [searchParams, setSearchParams] = useState<SearchParams>({
    text: searchText,
    sort: 'latest',
    searchType: searchType,
  });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText((prev) => prev);
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
        py: '1',
        px: '0.5',
        position: 'fixed',
        top: '14',
        left: '0',
        right: '0',
      })}
    >
      <SearchDropdown searchType={searchType} setSearchType={setSearchType} />
      <form
        className={flex({
          alignItems: 'center',
          w: 'full',
          borderLeft: '1px solid',
          borderColor: 'gray.600',
        })}
        onSubmit={handleSubmit}
      >
        <Input
          className={css({ w: 'full', h: 'full', backgroundColor: 'gray.100', textStyle: 'md' })}
          placeholder='검색'
          value={searchParams.text}
          onChange={handleChangeText}
          variants='ghost'
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
