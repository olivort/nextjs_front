import App from "next/app";
import Head from "next/head";
import ErrorPage from "next/error"
import '../global.css'
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
import { getGlobalData } from "../lib/api";


// Store Strapi Global object in context
export const GlobalContext = createContext({});

export default function MyApp({ Component, pageProps }) {
  const { global } = pageProps;

  if (global == null) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <>
      {/* Favicon */}
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon.data.attributes.url)}
        />
      </Head>
      {/* Display the content */}
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}


/*
fetch the Global site settings which are basically the Global single-type in Strapi
*/
// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  // Fetch global site settings from Strapi
  /*const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });*/
//alternative: fetch via graphql (see lib/api.js)
const globalRes = await getGlobalData(appContext.router.locale)

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};