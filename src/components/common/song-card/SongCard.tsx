import { SearchItem } from '@/types/search';
import { Picture } from '@/components/common/picture';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface SongCardProps {
  song: SearchItem;
}

// 노래방 번호 데이터가 불확실해. 어케 해야할지 현재에는 무조건 1개는 있어 금영이는 tj든
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
      <div>
        <div>
          <h1>{song.title_ko}</h1>
          <div>
            <div />
            <p></p>
          </div>
        </div>
        <div>
          <h2 className={css({ color: 'gray.400' })}>{song.artist_ko}</h2>
          <div>
            <div />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
