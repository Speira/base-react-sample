This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# speira-base-react

## Added modules

default packages:

```bash
yarn add babel-plugin-module-resolver normalize.css prop-types react-router-dom styled-components react-is @styled-icons/bootstrap
```

development packages:

```bash
yarn add -D babel-plugin-styled-components prettier eslint-config-airbnb eslint-config-prettier eslint-import-resolver-babel-module eslint-plugin-prettier react-styleguidist enzyme enzyme-adapter-react-16
```

## Structure

This project has a module oriented conception, that main all functionalities are
first isolated (in modules folder) and then provided to the src/App.js file.
They use the same view components (src/components) and can communicate each other
only with the help of contexts (src/contexts).

Some utilities (src/utils) are provided for third party service, constants,
functions etc...

```mermaid
graph TD
  Contexts --> App.js
  App.js --> modules/moduleName;
  modules/moduleName --> modules/moduleName/containers;
  modules/moduleName/containers --> modules/moduleName/components;
  modules/moduleName/components --> components;
  utils & hooks --> modules/moduleName/containers;
  utils & hooks --> modules/moduleName/components;
  utils & hooks --> components;
  
```

## Setup

Paths to modules are often absolute and configured in the .babelrc file.

## Start the project

First you have to clone this project:

```bash
git clone https://github.com/Speira/base-react-sample.git
```

Create your projec with create-react-app:

```bash
 create-react-app [projectName]
```
Copy the structure:

```bash
 cp base-react-sample/{.babelrc, .editorconfig,.eslintignore,.eslintrc.js,.gitignore,.prettierrc, jsonconfig.json} ./projectName
 cp -r base-react-sample/src/{App.js, AppRoute.js components,contexts,hooks, modules, utils} ./projectName/src
```

```bash
 cd ./projectName && yarn
```

Install the added modules (see the "Added modules" section).

--

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
