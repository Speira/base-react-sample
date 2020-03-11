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

First you have to clone this project:
```bash
git clone https://github.com/Speira/base-react-sample.git
cd base-react-sample
```
```bash
 yarn
```

For the styleguide (listening to the port 6060):

```bash
yarn styleguide
```

For the application (port 3000):

```
yarn start
```

For the unit tests:

```
yarn test
```
