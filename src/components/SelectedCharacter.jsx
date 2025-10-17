import "react";
import PropTypes from "prop-types";

const SelectedCharacter = ({ character }) => {
  return (
    <div className="selected-container">
      <img
        className="selected-img"
        src={
          character.image ||
          "https://placehold.co/200x320/611010/000000?text=Harry+Potter"
        }
      />
      <div className="selected-text">
        <p className="character-name">{character.name}</p>
        <p>Casa: {character.house}</p>
        <p>Especie: {character.species}</p>
        <p>Género: {character.gender}</p>
        <p>Cumpleaños: {character.dateOfBirth}</p>
        <p>Estado: {character.alive ? "❤️" : "☠️"}</p>
        <p style={{ lineHeight: "30px" }}>Actor/Actriz: {character.actor} </p>
      </div>
    </div>
  );
};
export default SelectedCharacter;

SelectedCharacter.propType = {
  character: PropTypes.string.isRequired,
};
