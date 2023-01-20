const code = `import { useAtom } from 'jotai';
import { atomWithImmer } from 'jotai-immer';

const todo = {
  todo: {
    person: {
      name: "David",
        title: {
          goal: "old todo"
        },
    }
  }
};
const immerAtom = atomWithImmer(todo);

export default function Page() {
  const [todoAtom, setAtomTodo] = useAtom(immerAtom);
  const updateTodo = () => {
    setAtomTodo(state => {
        state.todo.person.title.goal = "new title";
        return state;
    });
  }
  return (
    <div className="app">
      <h3>Name: {todoAtom.todo.person.name}</h3>
      <p>Todo: {todoAtom.todo.person.title.goal}</p>
      <button onClick={updateTodo}>Update Todo</button>
    </div>
  )
}`;

const files = {
  "/App.js": {
    code: code,
  },
};

export default files;
