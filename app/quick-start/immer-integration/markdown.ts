export const markdown = `
# Integrations

Updating the state with jotai is simple with the provided \`set\` function but things can go complex and requires some extra effort with the nested object states as you have to copy the  state at each level with the spread operator \`...\` like so,
~~~js
...
setAtomTodo(state => {
  const deepCopyState = {
    ...state,
      todo: {
        ...state.todo,
        person: {
          ...state.todo.person,
          title: {
            ...state.todo.person.title,
            goal: "new title"
          }
        }
      }
    }
  return deepCopyState;
});
~~~

This is a very naive method and there may be a higher chance that you make some mistakes while updating the state like this.

To make our life easy we can take advantage of jotai 3rd party library's support. Jotai officially supports \`Immer\`, \`Optics\`, \`Zustand\`, \`tRPC\`, and various other 3rd party integrations.

Let's see how we can use \`immer\` to directly mutate the state,
You have to install \`immer\` and \`jotai-immer\` to use this feature.
~~~js
npm install immer jotai-immer
~~~
Create a new atom with \`atomWithImmer\`.
~~~js
import { atomWithImmer } from 'jotai-immer';

const immerAtom = atomWithImmer(todo);
...
const updateTodo = () => {
	setAtomTodo(immerTodo => {
    // directly mutating the state with immer
		immerTodo.todo.person.title = "new title";
		return immerTodo;
	});
}
~~~

\`atomWithImmer\` creates a new atom similar to the regular \`atom\` with a different writeFunction. In this bundle, we don't have read-only atoms, because the point of these functions is the immer produce(mutability) function. The signature of writeFunction is \`(get, set, update: (draft: Draft<Value>) => void) => void\`.
`
