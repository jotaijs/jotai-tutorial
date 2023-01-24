export const markdown = `
# Read Write atoms

These atoms are the combination of both read-only and write-only atoms.

~~~js
const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
(get, set) => {
    set(count, get(count) + 1);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.
Since the \`readWriteAtom\` is capable to read and set the original atom value, so we can only export \`readWriteAtom\` atom and can hide the original atom in a smaller scope. In this way we have to deal with less number of atoms in our app.

See the code how we use only \`handleMouseMoveAtom\` to read and update both the \`dotsArray\` in our app.
`