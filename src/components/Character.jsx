import "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/character.css";

const Character = ({ element }) => {
  return (
    <li key={element.id}>
      <img
        src={
          element.image ||
          "https://placehold.co/200x320/611010/000000?text=Harry+Potter"
        }
      />
      <div className="list-text">
        {element.name}
        <p>Casa: {element.house}</p>
        <p>Especie: {element.species}</p>
        <button>
          <Link to="/CharacterPage:character.id"></Link>Ficha 🔍
        </button>
      </div>
    </li>
  );
};

export default Character;

Character.PropTypes = {
  element: PropTypes.string.isRequired,
};
