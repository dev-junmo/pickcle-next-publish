/** @type {import('next').NextConfig} */
const config = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.tsx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },
  reactStrictMode: false,
  images: {
    unoptimized: true,
    disableStaticImages: true,
  },
};

export default config;
