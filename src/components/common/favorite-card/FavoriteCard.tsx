import React from 'react';
import styles from '@/components/common/favorite-card/favorite-card.styles';
import { Picture } from '@/components/common/picture';
import { PUBLIC } from '@/constants/public';
import Image from 'next/image';
import { FavoriteSong } from '@/types/favorite';
import { processFavoriteCard } from '@/components/common/favorite-card/utils/processFavoriteCard';
import { BookmarkMinus } from 'lucide-react';
import { useRemoveFavoriteSong } from '@/queries/favorite';
import { flex } from '@/styled-system/patterns';
import { css } from '@/styled-system/css';

interface FavoriteCardProps {
  favoriteSong: FavoriteSong;
  listId: number;
  onDragStart: (id: number) => void;
  onDragEnter: (order: number) => void;
  onDragEnd: () => void;
  onDragOver: (e: { preventDefault: () => void }) => void;
}

function FavoriteCard({
  favoriteSong,
  listId,
  onDragStart,
  onDragEnter,
  onDragEnd,
  onDragOver,
}: FavoriteCardProps) {
  const { mutate: removeSong } = useRemoveFavoriteSong(listId);
  const { songTitle, artistTitle, thumbnailUrl, karaokeNumbers } =
    processFavoriteCard(favoriteSong);

  return (
    <div
      className={styles.container}
      draggable={true}
      onDragStart={() => onDragStart(favoriteSong.id)}
      onDragEnter={() => onDragEnter(favoriteSong.order)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <Picture
            className={styles.image}
            src={thumbnailUrl}
            alt={`${songTitle} 이미지`}
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
          </div>
        </div>
      </div>
      <button
        onClick={() => removeSong(favoriteSong.id)}
        className={flex({
          minW: '9',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        <BookmarkMinus strokeWidth={1} className={css({ color: 'gray.500' })} />
      </button>
    </div>
  );
}

export default FavoriteCard;
