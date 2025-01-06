import { SearchItem } from '@/types/search';
import { Picture } from '@/components/common/picture';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import Image from 'next/image';
import { PUBLIC } from '@/constants/public';

interface SongCardProps {
  song: SearchItem;
}

function SongCard({ song }: SongCardProps) {
  if (!song) return null;

  const img = song.thumbnail_url ?? '에러 이미지';

  return (
    <div
      className={flex({
        py: '4',
        borderBottom: '1px Solid',
        borderColor: 'gray.300',
        gap: '4',
        alignItems: 'center',
      })}
    >
      <Picture className={css({ w: '11', h: '11', borderRadius: '10px' })} src={img} />
      <div className={flex({ w: 'full', justifyContent: 'space-between' })}>
        <div className={flex({ flexDir: 'column' })}>
          <h1 className={css({ fontSize: '18px', fontWeight: 'bold' })}>{song.title_ko}</h1>
          <h2 className={css({ color: 'gray.400', fontSize: '14px' })}>{song.artist_ko}</h2>
        </div>
        <div
          className={flex({ flexDir: 'column', alignItems: 'center', justifyContent: 'center' })}
        >
          {song.tj_number && (
            <div className={flex({ gap: '2', color: '#FF4A01', fontWeight: 'bold' })}>
              <Image src={PUBLIC.icons.karaoke.tj} alt='tj' width={22} height={100} />
              <p>{song.tj_number}</p>
            </div>
          )}
          {song.kumyoung_number && (
            <div className={flex({ gap: '2', color: '#7B6CD9', fontWeight: 'semibold' })}>
              <Image src={PUBLIC.icons.karaoke.ky} alt='ky' width={22} height={100} />
              <p>{song.kumyoung_number}</p>
            </div>
          )}
          {!song.tj_number && !song.kumyoung_number && <p className={css({ pr: '4' })}>-</p>}
        </div>
      </div>
    </div>
  );
}

export default SongCard;
