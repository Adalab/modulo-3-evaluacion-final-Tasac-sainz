import "react";
import PropTypes from "prop-types";
import NamesFilter from "./NamesFilter";
import HouseFilter from "./HouseFilter";
import GenderFilter from "./GenderFilter";

const Filters = ({
  updateName,
  inputName,
  updateHouse,
  inputHouse,
  updateGender,
  inputGender,
}) => {
  return (
    <div className="filters">
      <NamesFilter updateName={updateName} inputName={inputName} />
      <HouseFilter updateHouse={updateHouse} inputHouse={inputHouse} />
      <GenderFilter updateGender={updateGender} inputGender={inputGender} />
    </div>
  );
};
export default Filters;

Filters.propTypes = {
  updateName: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired,
  updateGender: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputHouse: PropTypes.string.isRequired,
  inputGender: PropTypes.string.isRequired,
};
