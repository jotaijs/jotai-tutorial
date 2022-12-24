export const markdown = `
# Readonly atoms

Readonly atoms are the atoms that are derived from or rely's on other atoms.  We can't change their value because they do not have any setter function, let's see how we define a readonly atom.

~~~js
const textAtom = atom('readonly')
const uppercase = atom((get) => get(textAtom).toUpperCase())
~~~

It takes a callback that have a paramater **get** which allows us to access the other atom value.
Changing the value of atom it is derived from will also updated the derived atom. 
`