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
`