const code = `import { atom, useAtom } from 'jotai';

const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})

export default function Page() {
  const [uppercaseTextVal] = useAtom(textAtom);
  const [, uppercaseText] = useAtom(uppercase);
  return (
    <div>
      <h1>{uppercaseTextVal}</h1>
      <button onClick={uppercaseText}>ChangeToUpperCase</button>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
