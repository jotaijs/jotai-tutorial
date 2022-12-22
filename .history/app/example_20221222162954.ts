const code = `import { atom, useAtom } from 'jotai';

const counter = atom(0);

export default function Page() {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}`;

const files = {
    '/App.js': {
        code: code
    }
}

export default files