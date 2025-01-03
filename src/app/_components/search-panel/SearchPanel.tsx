import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { SearchParams } from '@/types/search';
import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';
import { SearchDropdown } from '@/app/_components/search-panel/search-dropdown';
import styles from './search-panel.styles';

// TODO: text 비어 있을 경우 입력 해달라고 아우성 치기
function SearchPanel() {
  const searchParams = useSearchParams();
  const [searchType, setSearchType] = useState<SearchParams['searchType']>(
    (searchParams.get('searchType') as SearchParams['searchType']) || 'both'
  );

  return (
    <div className={styles.wrapper}>
      <SearchDropdown searchType={searchType} setSearchType={setSearchType} />
      <form className={styles.form} action='/search'>
        <Input className={styles.input} placeholder='검색' name='text' variants='ghost' />
        <input type='hidden' name='searchType' value={searchType} />
        <div>
          <Button className={styles.buttonWrapper} size='m'>
            검색
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchPanel;
