/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        // if you navigate to /about you wiil be redirect to main page
        // with /
        // And if you set permanent to true it's means this page permanentaly
        // indicates is applicable and you permanently redirect to new path
        // And if you set to  temporarily it's means this path will working in near future
        // 308 - permanently and 307 - temporarily really matters for crawlers or SEO search engines

        source: '/about',
        destination: '/',
        permanent: true,
      },
      {
        source: '/old-blog/:slug',
        destination: '/news/:slug', // Matched parameters can be used in the destination
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
