'use client';

import { SearchItems } from '@/types/search';
import { SongCard } from '@/components/common/song-card';
import { css } from '@/styled-system/css';

function SearchList({ searchList }: { searchList: SearchItems }) {
  return (
    <ul className={css({ mt: '4' })}>
      {searchList.map((song) => (
        <SongCard song={song} key={song.id} />
      ))}
    </ul>
  );
}

export default SearchList;
