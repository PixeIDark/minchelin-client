// 레시피 박스 컴포넌트로 만들기. 카테고리 박스랑 공유
// 안의 이미지는 크기가 다르므로 개별로 쓰거나 type 별로 데이터와 스타일 다르게

import { css } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';

function HomePage() {
  return (
    <div className={css({ pt: '2' })}>
      <div className={css({ backgroundColor: 'gray.500', p: '2' })}>
        <div className={flex({ alignItems: 'center', justifyContent: 'space-between' })}>
          <div className={flex()}>
            <p>아이콘</p> <p>카테고리</p>
          </div>
          <button>더 보기</button>
        </div>
        <div
          className={grid({
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '2',
            mt: '2',
          })}
        >
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
          <div className={css({ backgroundColor: 'red', width: '73px', height: '73px' })} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
