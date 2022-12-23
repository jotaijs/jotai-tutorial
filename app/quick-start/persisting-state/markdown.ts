export const markdown = `
# Persisting state value

**atomWithStorage** is a special kind of atom that automatically syncs the value provided to it with localstorage or sessionStorage, and picks the value upon the first load automatically! It's available in the jotai/utils module.
To persisting our theme atom create it with the atomWithStorage.
~~~js
const theme = atomWithStorage('dark', false)
~~~

Now, when you reload the page you see the theme matches with the value before the page reloads.
`;
