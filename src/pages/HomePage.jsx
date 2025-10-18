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
  const [inputGender, setInputGender] = useState(ls.get("userGender", ""));

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

  const updateGender = (value) => {
    setInputGender(value);
    ls.set("userGender", value);
  };

  const filteredCharacter = characters
    .filter((character) =>
      character.name.toLowerCase().includes(inputName.toLowerCase())
    )

    .filter((character) => {
      if (inputHouse === "") {
        return true;
      } else {
        return character.house === inputHouse;
      }
    })

    .filter((character) => {
      if (inputGender === "") {
        return true;
      } else {
        return character.gender === inputGender;
      }
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
          updateGender={updateGender}
          inputGender={inputGender}
        />
        <ResetComponent
          setInputName={setInputName}
          setInputHouse={setInputHouse}
          setInputGender={setInputGender}
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
