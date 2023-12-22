import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  );
};

const App = () => {
  return React.createElement(
    // creates a markup
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me !"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockateil",
    })
  );
};

const container = document.getElementById("root"); // getting the DOM element
const root = createRoot(container); // setting container as the root of the component tree
root.render(React.createElement(App));
