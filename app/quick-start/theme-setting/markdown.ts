export const markdown = `
## Theme Switcher with jotai atoms

Developers love dark theme but setting up the theme can be very hectic for the developers as when there are many components in your app and you have to pass your theme props very deep in the component tree where things can become ambigous.

Doing the same task with the help of jotai atoms you can setup different themes for you app in minutes. Let's see how we do this,
Initialize a theme atom with a default value and passed it to the **useState** hook with a setAppTheme() function.

~~~js
const theme = atom('light');
~~~

When we click on button setAppTheme() function setup the theme value to dark if the previous value of theme is light and vice-versa.

That's the power of jotai atoms, we able to setup our theme switcher in less then 15 lines of code. Also we can import our theme atom to any component we want and use it's value or change it accordingly to our needs.

`;
