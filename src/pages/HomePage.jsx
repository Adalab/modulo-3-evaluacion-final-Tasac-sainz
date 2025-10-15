import { useEffect, useState } from "react";
import listCharacters from "../services/api";
import Filters from "../components/Filters";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState("");

  useEffect(() => {
    listCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  const filterByName = characters.filter((character) =>
    character.name.toLowerCase().includes(inputName.toLowerCase())
  );

  const updateName = (value) => {
    setInputName(value);
  };

  return (
    <div className="Home-container">
      <Filters updateName={updateName} inputName={inputName} />
      <ul>
        {filterByName.map((element) => {
          return (
            <li key={element.id}>
              <img
                src={
                  element.image ||
                  "https://placehold.co/200x350/611010/000000?text=Harry+Potter"
                }
              />
              <div className="list-text">
                <p>{element.name}</p>
                <p>Especie: {element.species}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
