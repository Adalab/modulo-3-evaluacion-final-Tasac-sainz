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
      <input
        name="house"
        id="house"
        placeholder="Griffindor"
        value={inputHouse}
        onChange={handleChangeHouse}
      ></input>
    </form>
  );
};
export default HouseFilter;
HouseFilter.protType = {
  updateHouse: PropTypes.func.isRequired,
  inputHouse: PropTypes.string.isRequired,
};
