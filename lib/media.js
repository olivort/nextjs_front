/*
fetch Strapi media
This function returns the correct URL of an image depending on where it is hosted 
(either on your local machine or hosted on a server).
*/



import { getStrapiURL } from "./api";
/*
export function getStrapiMedia(media) {
  const { url } = media;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}*/

export function getStrapiMedia(url) {
  if (url == null) {
    return null
  }
  //const mediaUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  // Return the full URL if the media is hosted on an external provider
  if (url.startsWith("http") || url.startsWith("//")) {
    return url
  }

  // Otherwise prepend the URL path with the Strapi URL
  return getStrapiURL(url)
  /*return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${url}`*/
}
