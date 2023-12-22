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
npm install --save-dev prettier@2.7.1<br />
Create a file .prettierrc and put {} signalling to use default values<br />
Script : {format : "prettier --write \"src/\*\*/\*.{jsx,js}\""} mind the inverted commas and the asterisk correctly

## 2. Eslint

Tool to spot simple JS errors.<br />
npm i -D eslint@8.24.0 eslint-config-prettier@8.5.0<br />
Create a file .eslintrc.json and config it.<br />
Script : {lint : "eslint \"src/\*\*/\*.{jsx,js}\" --quiet"}<br />
Can do npm run lint OR npm run lint -- --debug OR npm run lint -- --debug

# Doubts

1. Why root.render(React.createElement(App)) works and root.render(App) doesn't works?
2. Why do we need to install a prettier package and an extension too?
