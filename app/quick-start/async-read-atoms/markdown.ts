export const markdown = `
# Async Read Atoms

Using async atoms, you gain access to real-world data while still managing them directly from your atoms and with incredible ease.

We can separate them in two main categories:
•Async read atoms
•Async write atoms

Let's see first how we declare async read atoms,
~~~js
const counter = atom(0);
const asyncAtom = atom(async (get) => get(counter) * 5);
~~~

We suspend the rendering using **React Suspense**.
~~~js
<Suspense fallback={<span>loading...</span>}>
      <AsyncComponent />
</Suspense>
~~~

But there is a more jotai way of doing this with the **loadable** api present in jotai/utils. Simply wrap the atom in loadable util and it returns the value with one of the three states: **loadable**, **hasData** and **hasError**. Now there is no need to wrap your component by a **Suspense** element.

~~~js
{
    state: 'loading' | 'hasData' | 'hasError',
    data?: any,
    error?: any,
}
~~~

~~~js
import { loadable } from "jotai/utils"

const asyncAtom = atom(async (get) => get(countAtom))
const loadableAtom = loadable(asyncAtom)
const Component = () => {
  const [value] = useAtom(loadableAtom)
  if (value.state === 'hasError') return <Text>{value.error}</Text>
  if (value.state === 'loading') {
    return <Text>Loading...</Text>
  }
  return <Text>Value: {value.data}</Text>
~~~
`;
