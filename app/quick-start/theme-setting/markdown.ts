export const markdown = `
# Theme Switcher

Developers love dark theme but setting up the theme can be very hectic for the developers as when there are many components in your app and you have to pass your theme props very deep in the component tree where things can become ambigous.

Doing the same task with the help of jotai you can setup different themes for you app in minutes. Let's see how we do this,
Initialize a theme atom with a default value. 

~~~js
const theme = atom('light');
~~~

Passed the atom to the **useState** hook.

~~~js
const [appTheme, setAppTheme] = useAtom(theme);
~~~

That's all we have to do to define a global theme state which is accessible to all components of your app.
`;
