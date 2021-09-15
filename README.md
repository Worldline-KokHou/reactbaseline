# Learning

[React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react)

# State Management

[React Redux](https://react-redux.js.org/introduction/getting-started)

[Redux Toolkit](https://redux-toolkit.js.org/)

# Rest API calling

[axios](https://github.com/axios/axios)

# Cache

# Storage

# Folder structure
[React Architecture: How to Structure and Organize a React Application](https://www.taniarascia.com/react-architecture-directory-structure/)
## Assets
Global static assets such as images, svgs, company logo, etc.

## Components
Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons, (if your component is individual not for share, please put under your views(pages))

### Services
JavaScript modules
### Store
Global Redux store

### Utils
Utilities, helpers, constants, and the like

### Views
Can also be called "pages", the majority of the app would be contained here

### Middleware
Application-level middleware, Router-level middleware, Error-handling middleware, Built-in middleware, Third-party middleware, Logger middleware

# Code formating
formatting config .editorconfig

# ES lint
Using standard eslint rules
Run scripts

to check --> eslint ./

to fix   --> eslint ./ --fix

# Global styling (Theme)

# Environment configuration

# Component

- Decide what components to build base on FSD

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
