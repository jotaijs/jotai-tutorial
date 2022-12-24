const code = `import { atom, useAtom } from 'jotai';

const textAtom = atom('readonly atoms')
const uppercase = atom((get) => get(textAtom).toUpperCase())

export default function Page() {
  const [lowecaseText, setLowercaseText] = useAtom(textAtom);
  const [uppercaseText] = useAtom(uppercase);
  const handleClick = (e) => setLowercaseText(e.target.value);
  return (
    <div>
      <input value={lowecaseText} onChange={handleClick} />
      <h1>{uppercaseText}</h1>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
