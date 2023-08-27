export const markdown = `
# Atom Creators

An atom creator means simply a function that returns an atom or a set of atoms. It's just a function and it's not some features that the library provides, but it's an important pattern to make a fairly complex use case. This avoids the boilerplate of having to set up another atom just to update the state of the first.

Consider this case,
~~~js
const fooAtom = atom(0);
const barAtom = atom(0);
const incFooAtom = atom(null, (get, set) => {
   set(fooAtom, c => c + 1);
};
const incBarAtom = atom(null, (get, set) => {
   set(barAtom, c => c + 1);
};
~~~
Although you can attach the suitable actions to the setter of the respective atom, but this also increases boilerplate code when there are more atoms in your code.
~~~js
const incAllAtom = atom(null, (get, set, action) => {
   if(action === 'inc1') // increase first atom
   if(action === 'inc2') // increase second atom
   ...
}
~~~

So simply replace this with the atom creators function.
~~~js
const createCountIncAtoms = (initialValue) => {
  const baseAtom = atom(initialValue)
  const valueAtom = atom((get) => get(baseAtom))
  const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
  return [valueAtom, incAtom]
}
~~~
`