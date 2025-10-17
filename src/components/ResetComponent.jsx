import "react";
import PropType from "prop-types";

const ResetComponent = ({ setInputName, setInputHouse }) => {
  const handleReset = () => {
    setInputName("");
    setInputHouse("");
  };

  return (
    <button className="btn-reset" onClick={handleReset}>
      Limpiar filtros
    </button>
  );
};

export default ResetComponent;

ResetComponent.propTypes = {
  setInputName: PropType.string.isRequired,
  setInputHouse: PropType.string.isRequired,
};
