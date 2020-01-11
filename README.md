This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# speira-base-react

## Structure

This project has a module oriented conception, that main all functionalities are
first isolated (in modules folder) and then provided to the src/App.js file.
They use the same view components (src/components) and can communicate each other
only with the help of contexts (src/contexts).

Some utilities (src/utils) are provided for third party service, constants,
functions etc...

## Setup

Paths to modules are often absolute and configured in the .babelrc file.

## Start the project

For the styleguide :

```bash
yarn styleguide
```

For the application :

```
yarn start
```

For the unit tests:

```
yarn test
```
