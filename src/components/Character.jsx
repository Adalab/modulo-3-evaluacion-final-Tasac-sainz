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
        <p>Especie: {element.species}</p>
        <div className="space-link">
          <Link to={`/character/${element.id}`} className="links">
            Ficha 🔍
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Character;

Character.PropTypes = {
  element: PropTypes.object.isRequired,
};
