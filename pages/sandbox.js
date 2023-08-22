import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"

export async function getStaticProps() {
  const allPostsData = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
  ]
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Sandbox</title>
      </Head>
      <section>
        <p>Hello world !</p>
      </section>
      <section>
        {allPostsData.map(({ id, title }) => (
          <ul>
            <li key={id}>
              {id}: {title}
            </li>
          </ul>
        ))}
      </section>
    </Layout>
  )
}
