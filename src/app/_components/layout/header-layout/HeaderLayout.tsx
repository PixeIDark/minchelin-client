'use client';

import { Header } from '@/app/_components/header';

// const excludedSegments = new Set(EXCLUDED_SEGMENTS);

function HeaderLayout() {
  // const segment = useSelectedLayoutSegment();
  //
  // if (segment && excludedSegments.has(segment)) return null;

  return (
    <div>
      <Header />
    </div>
  );
}

export default HeaderLayout;
