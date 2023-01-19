export const markdown = `
# Write Only atoms

With the help of writeOnly atoms you can modify the atoms it relies on. It's basically a two-way data binding, changing the derived atom also changes the parent atom, so use these atoms very carefully.

~~~js
const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})
~~~

The first value of the callback is always be null and second is the function to modify the atom value.

Let's take a more practical use case of write-only atoms,
Here we have an atom of positions of points we draw on the canvas and a \`drawing\` atom.
~~~js
const dotsAtom = atom([]);
// true when we drawing on canvas
const drawingAtom = atom(false);
~~~

The \`handleMouseDownAtom\` and \`handleMouseUpAtom\` are two write-only atom that we use to set the value of \`drawing\` atom and \`handleMouseMoveAtom\` is a write-only atom which adds the position of new points to the \`dotsArray\` atom when we drawing on the canvas.

~~~js
const handleMouseMoveAtom = atom(
  null,
  (get, set, update: Point) => {
    if (get(drawingAtom)) {
      set(dotsAtom, (prev) => [...prev, update]);
    }
  }
);
~~~

**Note:** You must be thinking that why we not updating the atoms value directly, why we use a write-only atom to update it. Well updating the value using the write-only atom prevents the extra rerenders in out app.
`