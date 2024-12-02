import { isServer, QueryClient } from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Next.js의 페이지 전환에서도 stale data를 보여주는 것이 좋습니다
        staleTime: 60 * 1000, // 1분
        // 서버 컴포넌트에서 prefetch된 데이터가 있을 수 있으므로
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // 서버: 항상 새로운 QueryClient 생성
    return makeQueryClient();
  }
  // 브라우저: 없으면 생성
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}
