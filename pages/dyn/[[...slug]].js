import ErrorPage from "next/error"
import { getPageData, fetchAPI, getGlobalData } from "../../lib/api"
import Sections from "../../components/sections"
//import Seo from "@/components/elements/seo"
import { useRouter } from "next/router"
import Layout from "../../components/layout"

// The file is called [[...slug]].js because we're using Next's
// optional catch all routes feature. See the related docs:
// https://nextjs.org/docs/routing/dynamic-routes#optional-catch-all-routes

const DynamicPage = ({ sections, metadata, global, pageContext }) => {
  const router = useRouter()

  // Check if the required data was provided
  if (!router.isFallback && !sections?.length) {
    return <ErrorPage statusCode={404} />
  }

  // Loading screen (only possible in preview mode)
  if (router.isFallback) {
    return <div className="container">Loading...</div>
  }

  return (
    <Layout global={global} pageContext={pageContext}>
      <h1 className="text-3xl font-bold underline">
         Hello world!
      </h1>
      <p>This is dynamic: {pageContext.slug}</p>
      {/* Display content sections */}
      <Sections sections={sections} />
    </Layout>
  )
}

export async function getStaticPaths(context) {
  // Get all pages from Strapi
  const mylocales=["fr"]
  const pages = await mylocales.reduce(
    async (currentPagesPromise) => {
      const currentPages = await currentPagesPromise
      const localePages = await fetchAPI("/pages", {
        fields: ["slug"],
      })
      return [...currentPages, ...localePages.data]
    },
    Promise.resolve([])
  )

  const paths = pages.map((page) => {
    const { slug } = page.attributes
    // Decompose the slug that was saved in Strapi
    const slugArray = !slug ? false : slug.split("/")

    return {
      params: { slug: slugArray },
    }
  })

  return { paths, fallback: true }
}

export async function getStaticProps(context) {
  const { params, locale, locales, defaultLocale, preview = null } = context
  // fetch globale website data (?? or by context in _app?)
  const globalLocale = await getGlobalData()
  // Fetch pages. Include drafts if preview mode is on
  const pageData = await getPageData({
    slug: (!params.slug ? [""] : params.slug).join("/"),
  })

  if (pageData == null) {
    // Giving the page no props will trigger a 404 page
    return { props: {} }
  }

  // We have the required page data, pass it to the page component
  const { contentSections, metadata, slug } = pageData.attributes

  const pageContext = {
    slug,
  }

  return {
    props: {
      sections: contentSections,
      metadata,
      global: globalLocale.data,
      pageContext: {
        ...pageContext,
      },
    },
  }
}

export default DynamicPage
