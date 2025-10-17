import { useEffect, useState } from "react";
import apiCharacters from "../services/api";
import Filters from "../components/Filters";
import Header from "../components/Header";
import ResetComponent from "../components/ResetComponent";
import ListCharacters from "../components/ListCharacters";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputHouse, setInputHouse] = useState("");

  useEffect(() => {
    apiCharacters().then((response) => {
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
        <ListCharacters characters={filteredCharacter} />
      </div>
    </>
  );
};

export default HomePage;
