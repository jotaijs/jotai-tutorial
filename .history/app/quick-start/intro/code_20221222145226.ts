const code = `import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// Set the string key and the initial value
const darkModeAtom = atomWithStorage('darkMode', 'light')

export default function Page() {
  // Consume persisted state like any other atom
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const toggleDarkMode = () => setDarkMode(darkMode === 'light'? 'dark' : 'light')
  return (
    <div className={darkMode}>
      <h1>Welcome to {darkMode} mode!</h1>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </div>
  )
}`;

const files = {
    '/App.js': {
        code: code
    }
}

export default files