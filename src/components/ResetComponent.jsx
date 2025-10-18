import "react";
import PropType from "prop-types";
import ls from "../services/localStorage";

const ResetComponent = ({ setInputName, setInputHouse }) => {
  const handleReset = () => {
    setInputName("");
    setInputHouse("");
    ls.remove("userName");
    ls.remove("userHouse");
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
