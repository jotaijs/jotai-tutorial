export const markdown = `
# Async Write Atoms

In async write atoms the write function of the atoms returns a promise.

~~~js
const counter = atom(0);
const asyncAtom = atom(null, async (set, get) => {
    // request to external source
    set(counter, get(counter) + 1);
});
~~~
An important note here is that async write function does not hit the suspense.
`;
