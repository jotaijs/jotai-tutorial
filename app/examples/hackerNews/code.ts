export const code = `import { Suspense } from 'react'
import { a, useSpring } from '@react-spring/web'
import Parser from 'html-react-parser'
import { Provider, atom, useAtom, useSetAtom } from 'jotai'

type PostData = {
  by: string
  descendants?: number
  id: number
  kids?: number[]
  parent: number
  score?: number
  text?: string
  time: number
  title?: string
  type: 'comment' | 'story'
  url?: string
}

const postId = atom(9001)
const postData = atom(async (get) => {
  const id = get(postId)
  const response = await fetch(
    \`https://hacker-news.firebaseio.com/v0/item/\${id}.json\`
  )
  const data: PostData = await response.json()
  return data
})

function Id() {
  const [id] = useAtom(postId)
  const props = useSpring({ from: { id }, id, reset: true })
  return <a.h1>{props.id.to(Math.round)}</a.h1>
}

function Next() {
  // const [, set] = useAtom(postId)
  const setPostId = useSetAtom(postId)
  return (
    <button onClick={() => setPostId((id) => id + 1)}>
      <div>→</div>
    </button>
  )
}

function PostTitle() {
  const [{ by, text, time, title, url }] = useAtom(postData)
  return (
    <>
      <h2>{by}</h2>
      <h6>{new Date(time * 1000).toLocaleDateString('en-US')}</h6>
      {title && <h4>{title}</h4>}
      {url && <a href={url}>{url}</a>}
      {text && <div>{Parser(text)}</div>}
    </>
  )
}

export default function App() {
  return (
    <Provider>
      <Id />
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <PostTitle />
        </Suspense>
      </div>
      <Next />
    </Provider>
  )
}
`

export const code1 = `@import url("https://rsms.me/inter/inter.css");

* {
  box-sizing: border-box;
  outline: none !important;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: white;
  color: black;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#root {
  display: grid;
  grid-template-columns: auto 1fr auto;
}

h1 {
  writing-mode: tb-rl;
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  font-size: 10em;
  letter-spacing: -10px;
  text-align: left;
  margin: 0;
  padding: 50px 0px 0px 20px;
}

h2 {
  margin-bottom: 0.2em;
}

h4 {
  font-weight: 500;
}

h6 {
  margin-top: 0;
}

#root > div {
  padding: 50px 20px;
  overflow: hidden;
  word-wrap: break-word;
  position: relative;
}

#root > div > div {
  position: absolute;
}

p {
  color: #474747;
}

button {
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  font-size: 6em;
  padding: 0px 30px 20px 0px;
  display: flex;
  align-items: flex-end;
  color: inherit;
}

button:focus {
  outline: 0;
}

a {
  color: inherit;
}
`