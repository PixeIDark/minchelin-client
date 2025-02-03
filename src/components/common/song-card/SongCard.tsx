import { SearchItem } from '@/types/search';
import { Picture } from '@/components/common/picture';
import Image from 'next/image';
import { PUBLIC } from '@/constants/public';
import styles from './song-card.styles';
import { processSongCard } from '@/components/common/song-card/utils/processSongCard';
import { BookmarkCheck } from 'lucide-react';

interface SongCardProps {
  song: SearchItem;
}

function SongCard({ song }: SongCardProps) {
  const { songTitle, artistTitle, thumbnailUrl, karaokeNumbers } = processSongCard(song);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Picture
            className={styles.image}
            src={thumbnailUrl}
            alt={`${song.title_ja} 이미지`}
            fallbackSrc={PUBLIC.images.error.song_thumbnail}
          />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>{songTitle}</h1>
            <h2 className={styles.artist}>{artistTitle}</h2>
          </div>
          <div className={styles.karaokeWrapper}>
            <div className={styles.tjNumber}>
              <Image src={PUBLIC.icons.karaoke.tj} alt='tj' width={22} height={100} />
              <p className={styles.numberWidth}>{karaokeNumbers.tj}</p>
            </div>
            <div className={styles.kyNumber}>
              <Image src={PUBLIC.icons.karaoke.ky} alt='ky' width={22} height={100} />
              <p className={styles.numberWidth}>{karaokeNumbers.ky}</p>
            </div>
            {!song.tj_number && !song.kumyoung_number && <p className={styles.noNumber}>-</p>}
          </div>
        </div>
      </div>
      <div className={styles.bookmarkWrapper}>
        <BookmarkCheck strokeWidth={1} className={styles.bookmark} />
      </div>
    </div>
  );
}

export default SongCard;
