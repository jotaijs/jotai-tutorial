const code = `import { atom, useAtom } from 'jotai';
import { Suspense } from 'react'

const counter = atom(1);
const asyncAtom = atom(async (get) => get(counter));

function AsyncComponent() {
  const [asyncCount] = useAtom(asyncAtom);
  return (
    <div>
      <h1>{asyncCount}</h1>
    </div>
  )
}

export default function Page() {
   return (
    <Suspense fallback={<span>loading...</span>}>
      <AsyncComponent />
    </Suspense>
  )
}
`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
