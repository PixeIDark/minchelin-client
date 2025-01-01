'use client';

import { Header } from '../header';
import { SearchPanel } from '../search';
import { useSearchPanel } from '@/app/_components/layout/header-layout/_hooks/useSearchPanel';

function HeaderLayout() {
  const { isSearchOpen, onSearchToggle } = useSearchPanel();

  return (
    <div>
      <Header onSearchToggle={onSearchToggle} isSearchOpen={isSearchOpen} />
      {isSearchOpen && <SearchPanel />}
    </div>
  );
}

export default HeaderLayout;
