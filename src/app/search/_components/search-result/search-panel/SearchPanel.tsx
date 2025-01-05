'use client';

import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { SearchParams } from '@/types/search';
import { useSearchParams } from 'next/navigation';
import styles from './search-panel.styles';
import { Search } from 'lucide-react';
import { css } from '@/styled-system/css';
import { SearchDropdown } from '@/app/search/_components/search-result/search-panel/search-dropdown';
import { SearchResultCount } from '@/app/search/_components/search-result/search-panel/search-result-count';
import { SearchSortBy } from '@/app/search/_components/search-result/search-panel/search-sort-by';
import { useDropdownState } from '@/components/ui/dropdown/Dropdown';
import { flex } from '@/styled-system/patterns';

// TODO: text 비어 있을 경우 입력 해달라고 아우성 치기
// TODO: 40줄로 줄여라.
function SearchPanel({ totalSongs }: { totalSongs: number }) {
  const searchParams = useSearchParams();
  const { isOpen } = useDropdownState('search-dropdown');
  const [searchType, setSearchType] = useState<SearchParams['searchType']>(
    (searchParams.get('searchType') as SearchParams['searchType']) || 'both'
  );
  const [sortBy, setSortBy] = useState<SearchParams['sort']>(
    (searchParams.get('sort') as SearchParams['sort']) || 'latest'
  );

  const currSearchType = searchParams.get('searchType') as SearchParams['searchType'];
  return (
    <div>
      <div className={styles.wrapper(isOpen)}>
        <SearchDropdown searchType={searchType} setSearchType={setSearchType} />
        <form className={styles.form} action='/search'>
          <Input className={styles.input} placeholder='검색' name='text' variants='imaginary' />
          <input type='hidden' name='searchType' value={searchType} />
          <input type='hidden' name='sort' value={sortBy} />
          <button className={css({ w: '6' })} type='submit'>
            <Search size={24} className={css({ color: 'gray.700' })} />
          </button>
        </form>
      </div>
      <div
        className={flex({
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '15px',
          mt: '5',
        })}
      >
        <SearchResultCount searchType={currSearchType} totalSongs={totalSongs} />
        <SearchSortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
}

export default SearchPanel;
