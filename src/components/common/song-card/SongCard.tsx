import { SearchItem } from '@/types/search';
import { Picture } from '@/components/common/picture';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

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
      <div className={flex({ flexDir: 'column', w: 'full' })}>
        <div className={flex({ justifyContent: 'space-between', w: 'full' })}>
          <h1>{song.title_ko}</h1>
          <div className={flex({})}>
            <div />
            <p>{song.tj_number}</p>
          </div>
        </div>
        <div className={flex({ justifyContent: 'space-between', w: 'full' })}>
          <h2 className={css({ color: 'gray.400' })}>{song.artist_ko}</h2>
          <div className={flex({})}>
            <div />
            <p>{song.kumyoung_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
