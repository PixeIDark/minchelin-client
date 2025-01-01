'use client';

import { Header } from '@/app/components/header';
import { SearchPanel } from '../../search';
import { useSearchPanel } from '@/app/components/layout/header-layout/_hooks/useSearchPanel';

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
