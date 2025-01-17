'use client';

import styles from './search-panel.styles';
import { SearchDropdown } from '@/app/search/_components/search-result/search-panel/search-dropdown';
import { SearchResultCount } from '@/app/search/_components/search-result/search-panel/search-result-count';
import { SearchSortBy } from '@/app/search/_components/search-result/search-panel/search-sort-by';
import { useDropdownState } from '@/components/ui/dropdown/Dropdown';
import { useSearchState } from '@/app/search/_components/search-result/search-panel/_hooks/useSearchState';
import { SearchForm } from '@/app/search/_components/search-result/search-panel/search-form';
import { useSearchSort } from '@/app/search/_components/search-result/search-panel/_hooks/useSearchSort';
import { useSearchType } from '@/app/search/_components/search-result/search-panel/_hooks/useSearchType';

function SearchPanel({ totalSongs }: { totalSongs: number }) {
  const { isOpen } = useDropdownState('search-dropdown');
  const { searchType, setSearchType, currentSearchType } = useSearchType();
  const { sortBy, setSortBy } = useSearchSort();
  const { hasSearched } = useSearchState();

  return (
    <div>
      <div className={styles.wrapper(isOpen)}>
        <SearchDropdown searchType={searchType} setSearchType={setSearchType} />
        <SearchForm searchType={searchType} sortBy={sortBy} />
      </div>
      {hasSearched && (
        <div className={styles.resultSection}>
          <SearchResultCount searchType={currentSearchType} totalSongs={totalSongs} />
          <SearchSortBy sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      )}
    </div>
  );
}

export default SearchPanel;
