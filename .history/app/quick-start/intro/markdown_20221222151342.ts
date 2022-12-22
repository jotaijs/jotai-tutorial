export const markdown: string =
` 
# Creating your first atom

Jotai atoms are small isolated pieces of state. Ideally, one atom contains very small data (although it's just a convention.
So here's how you create your first atom

import { atom } from 'jotai';
const themeAtom = atom('light');
`