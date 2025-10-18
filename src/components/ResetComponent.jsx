import "react";
import PropType from "prop-types";
import ls from "../services/localStorage";

const ResetComponent = ({ setInputName, setInputHouse, setInputGender }) => {
  const handleReset = () => {
    setInputName("");
    setInputHouse("");
    setInputGender("");
    ls.remove("userName");
    ls.remove("userHouse");
    ls.remove("userGender");
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
  setInputGender: PropType.string.isRequired,
};
