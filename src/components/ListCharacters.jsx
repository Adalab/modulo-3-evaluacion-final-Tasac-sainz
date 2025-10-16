import "react";
import PropTypes from "prop-types";
import Character from "./Character";

const ListCharacters = ({ characters }) => {
  return (
    <ul>
      {characters.map((element) => {
        return <Character element={element} />;
      })}
    </ul>
  );
};

export default ListCharacters;
ListCharacters.PropTypes = {
  characters: PropTypes.string.isRequired,
};
