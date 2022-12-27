const code = `import { atom, useAtom } from 'jotai';
import { Suspense } from 'react'

const counter = atom(1);

const asyncAtom = atom(null, async (get, set) => {
    await fetch('https://jsonplaceholder.typicode.com/todos/');
    set(counter, get(counter) + 1);
});

function AsyncComponent() {
  const [count] = useAtom(counter);
  const [, incCounter] = useAtom(asyncAtom);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incCounter}>inc</button>
    </div>
  )
}

export default function Page() {
   return (
    <AsyncComponent />
  )
}
`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
