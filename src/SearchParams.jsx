import { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";

const ANIMAL = ["bird", "cat", "dog", "reptile", "rabbit"]

const SearchParams = () => {

  const [requestParams, setRequestParams] = useState({
    location: "",
    breed: "",
    animal: "",
  })
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        console.log(obj);
        setRequestParams(obj);
      }}>
        <label htmlFor="location">
          Location
          <input id="location" placeholder="location" name="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            name="animal"
            onChange={e => {
              const val = e.target.value;
              setAnimal(val);
            }}
          >
            <option />
            {ANIMAL.map(animal => <option key={animal}>{animal}</option>)}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            name="breed"
            disabled={breeds.length === 0}
          >
            <option />
            {breeds.map(breed => <option key={breed}>{breed}</option>)}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  )
};

export default SearchParams;