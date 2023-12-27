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
11. React has a Virtual DOM representation and compares this with the Real DOM. Identifies the minimal change to align them and applies that.
12. Smaller single purpose React components are easier to read, reuse and test.
13. Using the spread operator ... while passing props to component.<br />
    `<Pet {...petsProperties} key = {pet.id} />` is like writing `<Pet name=pet.name} animal={pet.animal} key={pet.id}`
14. React Dev Tools => Essential tool for React developers.
15. Strict mode => A tag with which you surround your app. Gives warnings about using features which will soon be deprecated.
16. NODE_ENV = development<br />
    React's development bundle is 4x bigger than its production as it has got more debug and developer helper tools. While shipping to production we need to set NODE_ENV = production, so that it compiles to a less code.

# React Capablities

<ol >
    <li> react-router-dom : `npm i react-router-dom@6.4.1` 
        <ul>
            <li>Giving multi page like experiences on a single HTML page.</li>
            <li>Managing rendering components rendering by state is complex.</li>
            <li>Makes navigation easier</li>
            Components included : <br>
            <ul>
                <li>BrowserRouter : </li>
                <li>Routes : Encapsulates all the routes</li>
                <li>Route : Has path to route to and element to render.</li>
                <li>< Route path="/" element={< Details />}></li>
                <li>Link : Similar to anchor tag, doesn't enforces refreshing of the page as anchor tag. Has `to` not `href`.</li>
            </ul>
        </ul>
    </li>
    <li>useParams from "react-router-dom" : const {id} = useParams() gets the id from the context of the BrowserRouter.</li>
    <li>React-query : npm install @tanstack/react-query@4.10.1.</li>
    <ul>
        <li>Minimize useEffect as it is long and complicated. Use React-query.</li>
        <li>Use QueryClientProvider and QueryClient are used along components and objects.</li>
        <li>React Query stores in-memory cache. Can define staletime and cachetime.</li>
    </ul>
    <li>Cannot <strong>await</strong> in component's render function. Why?
        <ul>
            <li> Half the component rendering until the promise resolves or gets rejected <strong>Performance issue and frozen UI</strong></li>
            <li>React render functions has to be really fast and return a React element tree as quickly as possible.</li>
        </ul>
        <strong>Solution</strong>
        <ul>
            <li>Use an useEffect after the component renders. Set the state with the received response and then render the component again.</li>
            <li>Track the status of the response like unloaded, isLoading, loaded, etc. and conditionally render it. </li>
        </ul>
    </li>

</ol>

# React Special Tools

<ol>
<li> <strong>Error Boundaries</strong> : Catches error within its bracket scope.<br />
    <ul>
        <li>Absolute must use Class component because <code>getDerivedFromError()</code> and <code>componentDidCatch(error, info)</code> only available to use in it</li>
        <li>Prevents your app from crashing.</li>
        <li>Can make an error boundary reusable by passing props to it.</li>
        <li>Can list all the errors to TrackJS and GemRelic like tools for fixing these errors.</li>
    </ul>
</li>
</ol>

# Class Components

<ol>
<li> Old counterpart of Functional component</li>
<li> Three musts : 
    <ul>
        <li>Must extend React.Component</li>
        <li>Must have a render function i.e. like body of functional component</li>
        <li>Cannot use hooks : choose either hooks or class component</li>
    </ul>
</li>
<li>Various lifecycle methods : componentDidMount(), componentDidUnmount(), componentDidUpdate(), shouldComponentMount() are aggregated to one useEffect</li>
<li>Allows super fine tuning for performance</li>
<li>Accesses state by this.state and props by this.props</li>
<li><strong>Using hooks : </strong>Create a small functional component, use hooks there and just pass the results to the class component.<strong> No way to use hooks directly in classes</strong></li>

</ol>

# HOOKS(React)

1. useState : component UI = f(state). Component re-renders whenever state changes.
2. useEffect : allows you to say, render the component first, and then run the effect. Receives a list of dependencies(states) as the 2nd parameter. Signifies run the effect, whenever these states changes. e.g. <br />
   `useEffect(() => {`<br />
   ` callThis();` <br />
   `},[state1, state2, ...]);`<br />
   An empty list signifies to run the effect only 1st time the component renders.

# HOOKS(Others)

1. useParams from react-router-dom
2. useQuery from @tanstack/react-query
3. useMutation

# Extras

<ol>
    <li>Extracting form data by :<br /> <code>const formData = new FormDate(e.target)<br /></code><code>const animal = formData.get("animal") ?? "";</code> </li>
    <li>data-* attribute : used to embed custom data on HTMl elements. Can be accessed on JS by dataset.*</li>
    <li>Everyting coming out of DOM is a string like every attribute's value</li>
    <li>Convert a string to number using unary add e.g. +"5"</li>
</ol>

# Doubts

1. Why root.render(React.createElement(App)) works and root.render(App) doesn't works?
2. Why do we need to install a prettier package and an extension too?
