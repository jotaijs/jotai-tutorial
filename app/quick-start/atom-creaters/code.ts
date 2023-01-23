const code = `import { atom, useAtom } from 'jotai'

const createCountIncAtoms = (initialValue) => {
  const baseAtom = atom(initialValue)
  const valueAtom = atom((get) => get(baseAtom))
  const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
  return [valueAtom, incAtom]
}

const [fooAtom, fooIncAtom] = createCountIncAtoms(0)
const [barAtom, barIncAtom] = createCountIncAtoms(0)

function App() {
  const [fooCount] = useAtom(fooAtom)
  const [, incFoo] = useAtom(fooIncAtom)
  const [barCount] = useAtom(barAtom)
  const [, incBar] = useAtom(barIncAtom)

  const onClick1 = () => {
    incFoo()
  }
  
  const onClick2 = () => {
    incBar()
  }

  return (
    <div className="app">
      <div>
        <span>{fooCount}</span>
        <button onClick={onClick1}>incFoo</button>
      </div>
      <div>
        <span>{barCount}</span>
        <button onClick={onClick2}>incBar</button>
      </div>
    </div>
  )
}

export default App`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
