#src folder

All the files used for the development of the App are written here.

- components: For stateless components
- containers: Manage many stateless components
- contexts: The react contexts
- hooks: All the custom hooks
- modules: Isolated containers families
- utils: All the functions and constants used in the App

## Style

Style is first created by src/globalStyle which provides all the HTML classes.
Then the src/components components can manage their own style, by using
globalStyle css stylesheet or by creating their styled css.

## Entry Point

The Entry point is src/index.js then src/App.js
To understand the App you should look at the src/App.js
