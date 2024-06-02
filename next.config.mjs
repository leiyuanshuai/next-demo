/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export'
  logging: { // 在开发模式下显示 fetch 请求和缓存日志
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;
