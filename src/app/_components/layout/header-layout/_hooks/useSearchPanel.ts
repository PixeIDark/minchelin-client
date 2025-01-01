import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useSearchPanel() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSearchOpen(false);
  }, [pathname]);

  const onSearchToggle = () => setIsSearchOpen((prev) => !prev);

  return {
    isSearchOpen,
    onSearchToggle,
  };
}
