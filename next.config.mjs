/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'out',  
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ogrenio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ogrenio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
