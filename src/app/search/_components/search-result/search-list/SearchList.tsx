'use client';

import { SearchItems } from '@/types/search';
import { SongCard } from '@/components/common/song-card';

function SearchList({ searchList }: { searchList: SearchItems }) {
  return (
    <ul>
      {searchList.map((song) => (
        <SongCard key={song.id} />
      ))}
    </ul>
  );
}

export default SearchList;
