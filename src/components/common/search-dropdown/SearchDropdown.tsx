import { Dropdown } from '@/components/ui/dropdown';

interface SearchDropdownProps {
  size  =
}

function SearchDropdown() {
  return (
    <Dropdown size='sm' variant='outline'>
      <Dropdown.Trigger>정렬 기준</Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item value='latest'>최신순</Dropdown.Item>
        <Dropdown.Item value='popular'>인기순</Dropdown.Item>
        <Dropdown.Item value='views'>조회순</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SearchDropdown;
