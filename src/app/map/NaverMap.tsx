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

  // 마커 클릭 이벤트 핸들러
  const createMarkerClickHandler = (place: any) => {
    return () => {
      // 네이버 플레이스 URL로 리다이렉트
      const placeUrl = `https://map.naver.com/p/search/${encodeURIComponent(place.name)}`;
      window.open(placeUrl, '_blank');
    };
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

      // 예시 장소 데이터 - 실제로는 API나 데이터베이스에서 가져와야 합니다
      const places = [
        { id: 1, name: '서울시청', lat: 37.5666805, lng: 126.9784147 },
        // 더 많은 장소 데이터를 추가할 수 있습니다
      ];

      // 각 장소에 대한 마커 생성
      places.forEach((place) => {
        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(place.lat, place.lng),
          map: map,
          title: place.name,
        });

        // 마커 클릭 이벤트 추가
        window.naver.maps.Event.addListener(marker, 'click', createMarkerClickHandler(place));

        // 정보창 생성
        const infoWindow = new window.naver.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3>${place.name}</h3>
              <p>클릭하여 상세정보 보기</p>
            </div>
          `,
        });

        // 마커 호버 이벤트
        window.naver.maps.Event.addListener(marker, 'mouseover', () => {
          infoWindow.open(map, marker);
        });

        window.naver.maps.Event.addListener(marker, 'mouseout', () => {
          infoWindow.close();
        });
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
        onReady={onMapScriptLoad}
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

export default NaverMap;
