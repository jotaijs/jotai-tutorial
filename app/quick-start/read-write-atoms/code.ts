const code = `import { atom, useAtom } from 'jotai';

const count = atom(1)
const readWriteAtom = atom(
  (get) => 2 * get(count),
  (get, set) => {
    set(count, get(count) + 1);
  },
);

export default function Page() {
  const [doubleCount, incCount] = useAtom(readWriteAtom);
  return (
    <div>
      <h1>{doubleCount}</h1>
      <button onClick={incCount}>inc</button>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
