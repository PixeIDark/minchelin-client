import { Dropdown, DropdownSize, DropdownVariant } from '@/components/ui/dropdown';
import { SearchParams } from '@/types/search';
import { Dispatch, SetStateAction } from 'react';

interface SearchDropdownProps {
  // size: DropdownSize;
  // variant: DropdownVariant;
  searchType: SearchParams['searchType'];
  setSearchType: Dispatch<SetStateAction<SearchParams['searchType']>>;
}

const selected: { [key in SearchParams['searchType']]: string } = {
  both: '노래/가수',
  title: '노래',
  artist: '가수',
  lyrics: '가사',
};

function SearchDropdown({ searchType, setSearchType }: SearchDropdownProps) {
  return (
    <Dropdown
      size='search'
      variant='search'
      onSelect={(value: string) => setSearchType(value as SearchParams['searchType'])}
    >
      <Dropdown.Trigger>{selected[searchType]}</Dropdown.Trigger>
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
