export const markdown = `
# Read Write atoms

As you can guess from the name these atoms can do both reading an atoms value or modifying it.

~~~js
const count = atom(1);
const readWriteAtom = atom((get) => 2 * get(count),
(get, set) => {
    set(count, get(count) + 1);
  },
);
~~~

The first parameter is for reading and the second is for modifying the atom value.

Read write atom is helpful when updation of the atom is dependent on some conditions.
~~~js
const readWriteAtom = atom(
	(get) => {
		// conditions
	}
	if(conditions) {
		// updating the atom value
	}
);
~~~
`