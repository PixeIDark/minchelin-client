import { Dropdown } from '@/components/ui/dropdown';
import { SearchParams } from '@/types/search';
import { Dispatch, SetStateAction } from 'react';
import { SEARCH_TYPE_LABEL } from '@/app/search/_components/search-result/search-panel/search-dropdown/_constants/searchType';
import { ChevronDown } from 'lucide-react';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface SearchDropdownProps {
  searchType: SearchParams['searchType'];
  setSearchType: Dispatch<SetStateAction<SearchParams['searchType']>>;
}

function SearchDropdown({ searchType, setSearchType }: SearchDropdownProps) {
  const selectedLabel = SEARCH_TYPE_LABEL[searchType];

  return (
    <Dropdown
      id='search-dropdown'
      size='search'
      variant='search'
      onSelect={(value: string) => setSearchType(value as SearchParams['searchType'])}
    >
      <Dropdown.Trigger>
        <p className={flex({ w: '72px', justifyContent: 'center' })}>{selectedLabel}</p>
        <ChevronDown className={css({ color: 'gray.700' })} />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {searchType === 'both' || <Dropdown.Item value='both'>노래/가수</Dropdown.Item>}
        {searchType === 'title' || <Dropdown.Item value='title'>노래</Dropdown.Item>}
        {searchType === 'artist' || <Dropdown.Item value='artist'>가수</Dropdown.Item>}
        {searchType === 'lyrics' || <Dropdown.Item value='lyrics'>가사</Dropdown.Item>}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SearchDropdown;
