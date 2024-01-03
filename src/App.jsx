import { useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client"; // client or server side
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const App = () => {

  const adoptedPet = useState("");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity
      }
    }
  })


  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet} >
          <header>
            <Link to="/">Adopt Me !</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  )
};

const container = document.getElementById("root"); // getting the DOM element
const root = createRoot(container); // setting container as the root of the component tree
root.render(<App />);
