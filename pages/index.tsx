import Head from "next/head"
import Link from "next/link"

export default function Home(props) {
  const { lists } = props

  return (
    <div>
      <Head>
        <title>Next.js + SSR flow example</title>
      </Head>

      <h1>Next.js SSR example with routing + server side props</h1>
      <ul>
        {lists.map((list) => (
          <li>
            <Link href={`/lists/${list.slug}`}>
              <a>{list.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context) {
  const lists = await fetch(`http://localhost:3000/api/allLists`).then((res) =>
    res.json()
  )

  return {
    props: {
      lists,
    },
  }
}
