export const markdown = `
# Read Only atoms

Readonly atoms are derived from the other atoms. We can't change their value directly because these atoms rely on their parent atoms(atom from which these are derived).

~~~js
const textAtom = atom('readonly')
const uppercase = atom((get) => get(textAtom).toUpperCase())
~~~

These atoms takes a callback with a paramater \`get\` which allows us to read other atoms value.
Changing the value of parent will also updated the derived atom. 
`