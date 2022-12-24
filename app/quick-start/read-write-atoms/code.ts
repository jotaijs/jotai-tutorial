const code = `import { atom, useAtom } from 'jotai';

const count = atom(5)
const readWriteAtom = atom(
  (get) => get(count),
  (get, set, newCount) => {
    set(count, newCount * 2);
  },
);

export default function Page() {
  const [countAtom, setcountAtom] = useAtom(count);
  // we use this as a writeable atom only
  const [, doubleCountAtom] = useAtom(readWriteAtom);
  const handleClick = () => doubleCountAtom(countAtom);
  return (
    <div>
      <h1>{countAtom}</h1>
      <button onClick={handleClick}>Double</button>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
