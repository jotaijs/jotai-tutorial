export const markdown = `
# Read-Write atoms

Unlike the Readonly atoms they can be modified on their own, when we set it's value it also modified the atom it is derived from, it's is two-way data binding so be carefull working with these types of atoms.

~~~js
const readWriteAtom = atom(
  (get) => get(count),
  (get, set, newCount) => {
    set(count, newCount / 2);
  },
);
~~~

`