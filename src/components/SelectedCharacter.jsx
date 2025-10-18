import "react";
import PropTypes from "prop-types";
import Gryffindor from "../images/gryffindor.png";
import Howarts from "../images/howarts.png";
import Hufflepuff from "../images/hufflepuff.png";
import Ravenclaw from "../images/ravenclaw.png";
import Slytherin from "../images/slytherin.png";

const SelectedCharacter = ({ character }) => {
  const getShield = () => {
    if (character.house === "Gryffindor") {
      return Gryffindor;
    } else if (character.house === "Hufflepuff") {
      return Hufflepuff;
    } else if (character.house === "Ravenclaw") {
      return Ravenclaw;
    } else if (character.house === "Slytherin") {
      return Slytherin;
    } else {
      return Howarts;
    }
  };

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
        <div className="shield-container">
          <img className="shield" src={getShield()} />
        </div>
        <div className="specific-text">
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          <p>Cumpleaños: {character.dateOfBirth}</p>
          <p>Estado: {character.alive ? "❤️" : "☠️"}</p>
          <p>Actor/Actriz: {character.actor} </p>
        </div>
      </div>
    </div>
  );
};
export default SelectedCharacter;

SelectedCharacter.propTypes = {
  character: PropTypes.object.isRequired,
};
