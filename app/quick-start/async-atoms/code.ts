const code = `import { atom, useAtom } from 'jotai';
import { Suspense } from 'react'

const todo = {
    id: 0,
    title: 'learn jotai',
    completed: true
};

const request = async () => (
    fetch('https://jsonplaceholder.typicode.com/todos/5')
        .then((res) => res.json())
)
const todoAtom = atom(todo);

function Component() {
  const [todoGoal, setGoal] = useAtom(todoAtom);
  const handleClick = () => {
    setGoal(request());
  }
  return (
    <div>
      <p>Todays Goal: {todoGoal.title}</p>
      <button onClick={handleClick}>New Goal</button>
    </div>
  )
}

export default function Page() {
   return (
    <Suspense fallback={<span>loading...</span>}>
      <Component />
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
