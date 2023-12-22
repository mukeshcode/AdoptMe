import { createRoot } from "react-dom/client"; // client or server side
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me !</h1>
      <SearchParams />
    </div>
  )
};

const container = document.getElementById("root"); // getting the DOM element
const root = createRoot(container); // setting container as the root of the component tree
root.render(<App />);
