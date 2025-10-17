import "react";
import PropTypes from "prop-types";
import Character from "./Character";

const ListCharacters = ({ characters, filteredCharacter }) => {
  return (
    <ul>
      {characters.map((element) => {
        return (
          <Character
            element={element}
            filteredCharacter={filteredCharacter}
            key={element.id}
          />
        );
      })}
    </ul>
  );
};

export default ListCharacters;
ListCharacters.PropTypes = {
  characters: PropTypes.array.isRequired,
};
