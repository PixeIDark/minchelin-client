import { SearchItem } from '@/types/search';
import {
  processArtistTitle,
  processKaraokeNumber,
  processSongImage,
  processSongTitle,
} from '@/utils/process/song';

export interface ProcessSongCard {
  thumbnailUrl: string;
  songTitle: string;
  artistTitle: string;
  karaokeNumbers: {
    tj: string;
    ky: string;
  };
}

export const processSongCard = (song: SearchItem): ProcessSongCard => {
  return {
    thumbnailUrl: processSongImage(song.thumbnail_url),
    songTitle: processSongTitle({
      ko: song.title_ko,
      ja: song.title_ja,
    }),
    artistTitle: processArtistTitle({
      ko: song.artist_ko,
      ja: song.artist_ja,
    }),
    karaokeNumbers: {
      tj: processKaraokeNumber(song.tj_number),
      ky: processKaraokeNumber(song.kumyoung_number),
    },
  };
};
