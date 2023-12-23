import { useState, useEffect } from "react";
import Pet from "./Pet";

const ANIMAL = ["bird", "cat", "dog", "reptile", "rabbit"]

const SearchParams = () => {

  const [location, setLocation] = useState("Seatlle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = ["Puddle"];

  useEffect(() => {
    requestPets();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);
    const json = await res.json();
    setPets(json.pets);
    // fetch and res.json are asynchronous operations means they don't block the execution
    // of the other codes while they are running. await is used to wait till the async. operation finishes
    // await pauses the function until the previous promise resolves creating a synchronous flow within the async code.
  }


  return (
    <div className="search-params">
      <form onSubmit={e => {
        e.preventDefault();
        requestPets();
      }}>
        <label htmlFor="location">
          Location
          <input onChange={e => setLocation(e.target.value)} id="location" value={location} placeholder="location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => {
              const val = e.target.value;
              setAnimal(val);
              setBreed("");
            }}>
            <option />
            {ANIMAL.map(animal => <option key={animal}>{animal}</option>)}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={
              e => {
                const val = e.target.value;
                setBreed(val);
              }
            }>
            <option />
            {breeds.map(breed => <option key={breed}>{breed}</option>)}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {
        pets.map(pet => <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id} />)
      }
    </div>
  )
};

export default SearchParams;