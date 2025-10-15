import "react";
import PropTypes from "prop-types";

const NamesFilter = ({ updateName, inputName }) => {
  const handleChangeName = (ev) => {
    updateName(ev.target.value);
  };

  return (
    <form>
      <label htmlFor="name">Busca al personaje por su nombre:</label>
      <input
        className="input-name"
        name="name"
        id="name"
        value={inputName}
        placeholder="Harry Potter"
        onChange={handleChangeName}
      ></input>
    </form>
  );
};

export default NamesFilter;

NamesFilter.propTypes = {
  updateName: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};
