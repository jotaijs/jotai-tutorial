export const markdown =
`
# Creating your first atom

Jotai atoms are small isolated pieces of state. Ideally, one atom contains very small data (although it's just a convention.
</
So here's how you create your first atom.

~~~js
import { atom } from 'jotai';
const counter = atom(0);
~~~

It is as simple to use as React’s integrated useState hook, but all state is globally accessible.
`