/*
access a remote image, but still use the built-in Next.js Image Optimization API
*/
module.exports = {
    reactStrictMode: true,
    images: {
      loader: "default",
      domains: ["localhost"],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true, // make this true if you want the redirect to be cached by the search engines and clients forever
        },
      ]
    },
  };