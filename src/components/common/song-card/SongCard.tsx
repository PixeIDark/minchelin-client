import { SearchItem } from '@/types/search';
import Image from 'next/image';

interface SongCardProps {
  song: SearchItem;
}

function SongCard({ song }: SongCardProps) {
  return (
    <div>
      <Image src={song.thumbnail_url} width={40} height={40} alt='d' />
    </div>
  );
}

export default SongCard;
