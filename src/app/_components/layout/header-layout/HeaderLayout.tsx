'use client';

import { useSearchPanel } from '@/app/_components/layout/header-layout/_hooks/useSearchPanel';
import { Header } from '@/app/_components/header';
import { SearchPanel } from '@/app/_components/search';

function HeaderLayout() {
  const { isSearchOpen, onSearchToggle } = useSearchPanel();

  return (
    <div>
      <Header onSearchToggle={onSearchToggle} isSearchOpen={isSearchOpen} />
      {isSearchOpen && <SearchPanel onSearchToggle={onSearchToggle} />}
    </div>
  );
}

export default HeaderLayout;
