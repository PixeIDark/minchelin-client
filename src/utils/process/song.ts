import { PUBLIC } from '@/constants/public';

interface MultiLangText {
  ko?: string | null;
  ja?: string | null;
}

export const processSongTitle = ({ ko, ja }: MultiLangText): string => {
  return ko || ja || '';
};

export const processArtistTitle = ({ ko, ja }: MultiLangText): string => {
  return ko || ja || '';
};

export const processSongImage = (thumbnailUrl?: string | null) => {
  return thumbnailUrl || PUBLIC.images.error.song_thumbnail;
};

export const processKaraokeNumber = (karaokeNumber?: string | null) => {
  return karaokeNumber ?? '-';
};
