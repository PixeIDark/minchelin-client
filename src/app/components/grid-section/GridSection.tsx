import { css } from '@/styled-system/css';
import { flex, grid } from '@/styled-system/patterns';
import React from 'react';

interface GridSectionProps {
  title: string;
  bgColor: string;
  icon?: React.ReactNode;
  columns?: number;
  rows?: number;
  size?: 'sm' | 'm' | 'lg';
  children: React.ReactNode;
}

const gridHeight = {
  sm: '154px',
  m: '316px',
  lg: '600px',
};

function GridSection({
  title,
  bgColor,
  icon,
  columns = 2,
  rows = 2,
  size = 'm',
  children,
}: GridSectionProps) {
  return (
    <div className={css({ backgroundColor: bgColor, p: '2' })}>
      <div className={flex({ alignItems: 'center', justifyContent: 'space-between' })}>
        <div className={flex({ alignItems: 'center', gap: '2' })}>
          {icon}
          <p className={css({ fontWeight: 'semibold' })}>{title}</p>
        </div>
        <a className={css({ color: 'gray.600', _hover: { color: 'gray.800' } })}>더 보기</a>
      </div>
      <div
        style={{
          height: gridHeight[size],
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
        className={grid({
          gap: '2',
          mt: '2',
          width: '100%',
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default GridSection;
