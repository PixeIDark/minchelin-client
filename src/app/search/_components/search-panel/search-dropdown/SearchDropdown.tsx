import { Dropdown } from '@/components/ui/dropdown';
import { SearchParams } from '@/types/search';
import { Dispatch, SetStateAction } from 'react';
import { SEARCH_TYPE_LABEL } from '@/app/search/_components/search-panel/search-dropdown/_constants/searchType';

interface SearchDropdownProps {
  searchType: SearchParams['searchType'];
  setSearchType: Dispatch<SetStateAction<SearchParams['searchType']>>;
}

function SearchDropdown({ searchType, setSearchType }: SearchDropdownProps) {
  const selectedLabel = SEARCH_TYPE_LABEL[searchType];

  return (
    <Dropdown
      size='search'
      variant='search'
      onSelect={(value: string) => setSearchType(value as SearchParams['searchType'])}
    >
      <Dropdown.Trigger>{selectedLabel}</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item value='title'>노래</Dropdown.Item>
        <Dropdown.Item value='artist'>가수</Dropdown.Item>
        <Dropdown.Item value='lyrics'>가사</Dropdown.Item>
        <Dropdown.Item value='both'>노래/가사</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SearchDropdown;
