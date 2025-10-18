import { useEffect, useState } from "react";
import apiCharacters from "../services/api";
import Filters from "../components/Filters";
import Header from "../components/Header";
import ResetComponent from "../components/ResetComponent";
import ListCharacters from "../components/ListCharacters";
import ls from "../services/localStorage";

const HomePage = () => {
  const [characters, setCharacters] = useState(ls.get("initialCharacter", []));
  const [inputName, setInputName] = useState(ls.get("userName", ""));
  const [inputHouse, setInputHouse] = useState(ls.get("userHouse", ""));

  useEffect(() => {
    if (characters.length === 0) {
      apiCharacters().then((response) => {
        setCharacters(response);
        ls.set("initialCharater", response);
      });
    }
  }, [characters.length]);

  const updateName = (value) => {
    setInputName(value);
    ls.set("userName", value);
  };

  const updateHouse = (value) => {
    setInputHouse(value);
    ls.set("userHouse", value);
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
    <>
      <Header />
      <div className="home-container">
        <Filters
          updateName={updateName}
          inputName={inputName}
          updateHouse={updateHouse}
          inputHouse={inputHouse}
        />
        <ResetComponent
          setInputName={setInputName}
          setInputHouse={setInputHouse}
        />
        {filteredCharacter.length > 0 ? (
          <ListCharacters characters={filteredCharacter} />
        ) : (
          <p className="not-found-character">Uppss, personaje no encontrado</p>
        )}
      </div>
    </>
  );
};

export default HomePage;
