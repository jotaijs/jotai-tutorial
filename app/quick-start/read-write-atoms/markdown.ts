export const markdown = `
# Read Write atoms

As we can guess from the name these atoms can do both reading an atoms value or modifying it.

~~~js
const readWriteAtom = atom((get) => 2 * get(count),
(get, set, newCount) => {
    set(count, newCount / 2);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.
`