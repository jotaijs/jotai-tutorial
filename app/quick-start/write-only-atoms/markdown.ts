export const markdown = `
# Write Only atoms

~~~js
const textAtom = atom('write only atoms')
const uppercase = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})
~~~

The first value of the callback is always to be null because this is a write-only atom it cannot read any other atom value. 
`