import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function ShowList(props) {
  const router = useRouter()
  const { allLists } = props
  const [list, setList] = useState(props.list)

  useEffect(() => {
    // useEffect does not run until client side
    // if (router.query.slug)
    if (router.query.slug !== list.slug) {
      getList(router.query.slug).then(setList)
    }
  }, [router.query.slug])

  return (
    <div>
      <Head>
        <title>Next.js + SSR flow example</title>
      </Head>

      <h1>View List</h1>
      <p>You are currently looking at {list.name}</p>

      <h2>Other Lists</h2>
      <ul>
        {allLists.map((list) => (
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

async function getList(slug) {
  return fetch(`http://localhost:3000/api/getList?slug=${slug}`).then((res) =>
    res.json()
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  const list = await getList(slug)

  if (!list) {
    context.res.statusCode = 404
  }

  const allLists = await fetch(
    `http://localhost:3000/api/allLists`
  ).then((res) => res.json())

  return {
    props: {
      list,
      allLists,
    },
  }
}
