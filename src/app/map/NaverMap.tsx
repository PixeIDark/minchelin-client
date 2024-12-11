'use client';

import { useRef } from 'react';
import Script from 'next/script';
import { css } from '@/styled-system/css';

declare global {
  interface Window {
    naver: any;
  }
}

export function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  const initializeMap = () => {
    if (!mapRef.current) return;

    const mapOptions = {
      center: new window.naver.maps.LatLng(37.5666805, 126.9784147), // 서울 시청
      zoom: 14,
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
  };

  const onLoadError = () => {
    console.error('네이버 지도 로드 실패');
  };

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        onReady={initializeMap}
        onError={onLoadError}
      />
      <div
        ref={mapRef}
        className={css({
          width: 'full',
          height: '100vh',
        })}
      />
    </>
  );
}
