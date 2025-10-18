import "react";
import PropTypes from "prop-types";

const GenderFilter = ({ updateGender, inputGender }) => {
  const handleChangeGender = (ev) => {
    updateGender(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="gender">Selecciona el género del personaje:</label>
      <select
        className="input-name"
        name="gender"
        id="gender"
        value={inputGender}
        onChange={handleChangeGender}
      >
        <option value="">Todos</option>
        <option value="female">Femenino</option>
        <option value="male">Masculino</option>
      </select>
    </form>
  );
};
export default GenderFilter;
GenderFilter.protType = {
  updateGender: PropTypes.func.isRequired,
  inputGender: PropTypes.string.isRequired,
};
