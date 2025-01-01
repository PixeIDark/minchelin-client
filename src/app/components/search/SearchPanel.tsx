import { Input } from '@/components/ui/input';
import { flex } from '@/styled-system/patterns';
import { ChangeEvent, FormEvent, useState } from 'react';
import { SearchParams } from '@/types/search';
import { useSearch } from '@/queries/search';
import { LoadingButton } from '@/components/common/loading-button';
import { css } from '@/styled-system/css';

// TODO: dropdown 스타일은 자유롭게, 기능만 정해서 만들기
// TODO: url 에 데이터 넣고, search 페이지에서 모두 처리
function SearchPanel() {
  // TODO: 완성 후 constant로 분리
  const [searchParams, setSearchParams] = useState<SearchParams>({
    text: '',
    lang: 'ko',
    sort: 'latest',
    searchType: 'both',
  });
  const { isLoading, data: searchData, refetch } = useSearch(searchParams);

  console.log(searchData);
  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => ({ ...prev, text: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 이걸 안하면 페이지가 새로고침됨
    refetch();
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
        top: '56px',
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
          <LoadingButton
            className={css({
              width: '20',
              backgroundColor: 'gray.600',
              borderRadius: '0',
            })}
            isPending={isLoading}
            size='m'
          >
            검색
          </LoadingButton>
        </div>
      </form>
    </div>
  );
}

export default SearchPanel;
