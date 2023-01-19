export const markdown = `
# Read Only atoms

Readonly atoms are derived from the other atoms. We can't change their value directly because these atoms rely on their parent atoms(atom from which these are derived).

~~~js
const textAtom = atom('readonly');
const uppercase = atom((get) => get(textAtom).toUpperCase());
~~~

These atoms takes a callback with a paramater \`get\` which allows us to read other atoms value.
Changing the value of parent will also updated the derived atom.

~~~js
const firstName = atom('John');
const lastName = atom('Harris');
const fullName = atom((get) => get(firstName) + " " + get(lastName));
~~~

You can do more than just simply read the value of other atoms like \`filter\` and \`sorted\` out them or \`map\` over the values of the parent atom. And this is the beauty of it, Jotai gracefully lets you create dumb atoms derivated from even more dumb atoms.
Example, getting the list of all online and offline friends.
~~~js
const friendsStatus = atom([ 
    { name: "John", online: true },
    { name: "David", online: false },
    { name: "Micheal", online: true } 
]);

const onlineFriends = atom((get) => get(friendsStatus).filter((item) => item.online));
const offlineFriends = atom((get) => get(friendsStatus).filter((item) => !item.online));
~~~
`