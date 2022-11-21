/*
access a remote image, but still use the built-in Next.js Image Optimization API
*/
module.exports = {
    reactStrictMode: true,
    images: {
      loader: "default",
      domains: ["localhost"],
    },
  };