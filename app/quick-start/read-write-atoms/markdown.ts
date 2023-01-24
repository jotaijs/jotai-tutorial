export const markdown = `
# Read Write atoms

These atoms are the combination of both read-only and write-only atoms.

~~~js
const count = atom(1);
const readWriteAtom = atom((get) => 2 * get(count),
(get, set) => {
    set(count, get(count) + 1);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.
`