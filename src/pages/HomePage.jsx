import { useEffect, useState } from "react";
import listCharacters from "../services/api";
import Filters from "../components/Filters";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputHouse, setInputHouse] = useState("");

  useEffect(() => {
    listCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

  const updateName = (value) => {
    setInputName(value);
  };

  const updateHouse = (value) => {
    setInputHouse(value);
  };

  const filteredCharacter = characters.filter((character) => {
    const filterByName = character.name
      .toLowerCase()
      .includes(inputName.toLowerCase());
    const filterByHouse = character.house
      .toLowerCase()
      .includes(inputHouse.toLowerCase());

    return filterByName && filterByHouse;
  });

  return (
    <div className="Home-container">
      <Filters
        updateName={updateName}
        inputName={inputName}
        updateHouse={updateHouse}
        inputHouse={inputHouse}
      />
      <ul>
        {filteredCharacter.map((element) => {
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
                <p>{element.house}</p>
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
