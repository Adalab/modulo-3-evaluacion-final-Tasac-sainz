import { useEffect, useState } from "react";
import apiCharacters from "../services/api";
import Filters from "../components/Filters";
import Header from "../components/Header";
import ResetComponent from "../components/ResetComponent";
import ListCharacters from "../components/ListCharacters";
import ls from "../services/localStorage";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [inputName, setInputName] = useState(ls.get("userName", ""));
  const [inputHouse, setInputHouse] = useState(ls.get("userHouse", ""));

  useEffect(() => {
    apiCharacters().then((response) => {
      setCharacters(response);
    });
  }, []);

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
        <ListCharacters characters={filteredCharacter} />
      </div>
    </>
  );
};

export default HomePage;
