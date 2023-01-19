export const markdown = `
# Creating your first atom

Jotai atoms are small isolated pieces of state. Ideally, one atom contains very small data. 
Here's how you create your first atom.

~~~js
import { atom } from 'jotai';
const counter = atom(0);
~~~

It is as simple to use as React’s integrated \`useState\` hook, but all state is globally accessible.

~~~js
const [count, setCounter] = useAtom(counter);
~~~

The atom we created is to be passed to \`useState\` hook with the help of jotai \`useAtom\` api, which returns an array of size 2, where the 1st element is a value and the 2nd element is a function, to set the value of the atom.

Jotai considers anything to be an atom so you can create any type of atom you want whether it is atom of objects, arrays, or nested objects, and complexity keeps going on forever.
~~~js
const friendObj = atom({ name: "John", online: false });
const friendsArray = atom([ "John", "David", "Micheal" ]);
const nestedObj = atom({ friend1: { name: "John", age: 18 } });
~~~
`;
