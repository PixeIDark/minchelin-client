/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middlewareTracing: true, // 미들웨어 디버깅 옵션
  },
};

export default nextConfig;
