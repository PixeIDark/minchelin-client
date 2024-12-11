'use client';

import { useRef, useState } from 'react';
import Script from 'next/script';
import { css } from '@/styled-system/css';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    naver: any;
  }
}

export function NaverMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      });
    });
  };

  // Script onReady에서 호출될 함수
  const onMapScriptLoad = () => {
    setIsLoading(true);
    loadMap();
  };

  // 실제 지도 초기화 로직
  const loadMap = async () => {
    if (!mapRef.current) return;

    try {
      let centerLatLng;

      try {
        const position = await getCurrentLocation();
        centerLatLng = new window.naver.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
      } catch (error) {
        console.warn('Failed to get user location, using default location:', error);
        centerLatLng = new window.naver.maps.LatLng(37.5666805, 126.9784147); // 서울시청
      }

      const mapOptions = {
        center: centerLatLng,
        zoom: 14,
        zoomControl: true,
        zoomControlOptions: {
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      const map = new window.naver.maps.Map(mapRef.current, mapOptions);

      new window.naver.maps.Marker({
        position: centerLatLng,
        map: map,
      });

      setIsLoading(false);
    } catch (error) {
      console.error('Map initialization failed:', error);
      setError('지도를 불러오는데 실패했습니다.');
      setIsLoading(false);
    }
  };

  const onLoadError = () => {
    setError('네이버 지도를 불러오는데 실패했습니다.');
    setIsLoading(false);
  };

  if (error) {
    return <div className={css({ p: 4, color: 'red.500' })}>{error}</div>;
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_CLIENT_ID}`}
        onReady={onMapScriptLoad} // async 함수가 아닌 일반 함수로 변경
        onError={onLoadError}
      />
      <div className={css({ position: 'relative', width: 'full', height: '100vh', mt: '10' })}>
        {isLoading && (
          <div
            className={css({
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            })}
          >
            <Loader2 className={css({ animation: 'spin 1s linear infinite' })} size={32} />
            <p>지도를 불러오는 중입니다...</p>
          </div>
        )}
        <div ref={mapRef} className={css({ width: 'full', height: 'full' })} />
      </div>
    </>
  );
}
