import {
  processArtistTitle,
  processKaraokeNumber,
  processSongImage,
  processSongTitle,
} from '@/utils/process/song';
import { FavoriteSong } from '@/types/favorite';

export interface ProcessFavoriteCard {
  thumbnailUrl: string;
  songTitle: string;
  artistTitle: string;
  karaokeNumbers: {
    tj: string;
    ky: string;
  };
}

export const processFavoriteCard = (favoriteSong: FavoriteSong): ProcessFavoriteCard => {
  return {
    thumbnailUrl: processSongImage(favoriteSong.thumbnail_url),
    songTitle: processSongTitle({
      ko: favoriteSong.title_ko,
      ja: favoriteSong.title_ja,
    }),
    artistTitle: processArtistTitle({
      ko: favoriteSong.artist_ko,
      ja: favoriteSong.artist_ja,
    }),
    karaokeNumbers: {
      tj: processKaraokeNumber(favoriteSong.tj_number),
      ky: processKaraokeNumber(favoriteSong.kumyoung_number),
    },
  };
};
