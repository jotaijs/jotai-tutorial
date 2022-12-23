const code = `import { atom, useAtom } from 'jotai';

const theme = atom('light');

export default function Page() {
  const [appTheme, setAppTheme] = useAtom(theme);
  const handleClick = () => setAppTheme(appTheme === 'light'? 'dark': 'light');
  return (
    <div className={appTheme}>
      <h1>This is a theme switcher</h1>
      <button onClick={handleClick}>{appTheme === 'light'? '🌑': '☀️'}</button>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
