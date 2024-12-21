import { css } from '@/styled-system/css';
import { GridSection } from '@/app/components/grid-section';
import { Search } from 'lucide-react';

function HomePage() {
  return (
    <div className={css({ pt: '2', display: 'flex', flexDirection: 'column', gap: '4' })}>
      <GridSection
        title='카테고리'
        bgColor='gray.100'
        icon={<Search size={20} />}
        size='sm'
        columns={4}
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className={css({
              backgroundColor: 'red.500',
              borderRadius: 'md',
              width: '100%',
              height: '100%',
            })}
          />
        ))}
      </GridSection>
      <GridSection title='인기 레시피' bgColor='blue.500' icon={<Search size={20} />}>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={css({
              backgroundColor: 'blue.300',
              borderRadius: 'md',
              width: '100%',
              height: '100%',
            })}
          />
        ))}
      </GridSection>
    </div>
  );
}

export default HomePage;
