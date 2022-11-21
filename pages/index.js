import { useCallback, useEffect, useState } from 'react'
import Button from '../components/Button'
import ClickCount from '../components/ClickCount'
import styles from '../styles/home.module.css'
import { getPageData, fetchAPI, getGlobalData } from "../lib/api";
import Layout from "../components/layout";


function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home({ articles, categories, about }) {
 
  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <p>{about.attributes.title}</p>

    </main>
  )
}

export async function getStaticProps(context) {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, aboutRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/about", { populate: "*"  }),
  ]);
 
  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      about: aboutRes.data,
    },
    revalidate: 1,
  };
}

export default Home
