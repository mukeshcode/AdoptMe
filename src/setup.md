# Pure React

1. Including React and React-DOM library.
2. React provides all the React features like components, hooks, etc.
3. ReactDOM is the renderer library like React360, ReactNative, etc.
4. React.createElement(string | components) treat string as HTML tags and wraps body and render components.
5. React JSX translates into pure React like createElement.
6. Why use react => Small library, state transforms into UI, one way data flow from parent to child make debugging and understanding code easier
7. A component must return markup.

# Setup and Tooling

## 1. Prettier

Tool to organize the code.<br />
`npm install --save-dev prettier@2.7.1`<br />
Create a file .prettierrc and put {} signalling to use default values<br />
Script : `{format : "prettier --write \"src/**/*.{jsx,js}\""}` mind the inverted commas and the asterisk correctly

## 2. Eslint

Tool to spot simple JS errors.<br />
`npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0`<br />
Create a file .eslintrc.json and config it.<br />
Script : `{lint : "eslint \"src/**/*.{jsx,js}\" --quiet"}`<br />
Can do `npm run lint` OR `npm run lint -- --debug` OR `npm run lint -- --debug`<br />
Recognizes react : `npm install -D eslint-plugin-import@2.26.0 eslint-plugin-jsx-a11y@6.6.1 eslint-plugin-react@7.31.8`
Hooks : `npm i -D eslint-plugin-react-hooks@4.6.0`

## 3. Setup Git

## 4. Vite Setup

A build tool using Roll up.<br />
`npm i -D vite@3.1.4 @vitejs/plugin-react@2.1.0`<br />
`<script type="module" src="App.jsx">`<br />
Config vite.config.js file <br />
Works on live code inclusion not dead code elimination. <br />
Script : {
`"dev" : "vite | vite --port=3001", "build" : "vite build", "preview" : "vite preview"`
}

## 5. React & ReactDOM

`npm i react@18.2.0 react-dom@18.2.0`

# React Core Concepts

1. JSX gets converted to pure React like React.createElement() using Vite.
2. React Component are only re-rendered when state changes, new props are passed from parent to the child, and when they are forced to update using forceUpdate() method.
3. React HOOKS should always be called in the same order i.e. never use hooks inside conditiionals.
4. Render functions should be very fast and stateless(?).
5. Operations like fetch and res.json() are async operations means they don't block the execution of other codes. So, it is important to await for them, until they complete.
6. await pauses the execution of the function until the previous promise resolves creating a synchronous flow within the sync code.
7. When using map, pass "key" as a unique identifier per thing, it helps React to identify each obj. uniquely.
8. React uses key prop to render things in the proper order. If we just change the order of the obj. React would not re-render it again, but will just swap the changes.
9. Arrow functions are not hoisted as contrary to normal functions.
10. While writing custom hooks, set up a tracking status like "unloaded", "loading", "loaded" to make it easy writing test cases.

# HOOKS

1. useState : component UI = f(state). Component re-renders whenever state changes.
2. useEffect : allows you to say, render the component first, and then run the effect. Receives a list of dependencies(states) as the 2nd parameter. Signifies run the effect, whenever these states changes. e.g. <br />
   `useEffect(() => {`<br />
   ` callThis();` <br />
   `},[state1, state2, ...]);`<br />
   An empty list signifies to run the effect only 1st time the component renders.

# Doubts

1. Why root.render(React.createElement(App)) works and root.render(App) doesn't works?
2. Why do we need to install a prettier package and an extension too?
