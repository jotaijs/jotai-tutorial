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
`;
