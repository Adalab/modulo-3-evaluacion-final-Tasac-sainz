import "react";
import PropTypes from "prop-types";

const HouseFilter = ({ updateHouse, inputHouse }) => {
  const handleChangeHouse = (ev) => {
    updateHouse(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="house">
        Escribe aquí el nombre de la casa que quieres consultar:
      </label>
      <select
        className="input-name"
        name="house"
        id="house"
        value={inputHouse}
        onChange={handleChangeHouse}
      >
        <option value="">Selecciona una casa</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </form>
  );
};
export default HouseFilter;
HouseFilter.protType = {
  updateHouse: PropTypes.func.isRequired,
  inputHouse: PropTypes.string.isRequired,
};
