/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['images.unsplash.com']
  },
  i18n:{
    locales:['en'],
    defaultLocale:'en'
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
