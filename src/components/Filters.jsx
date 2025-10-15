import "react";
import PropTypes from "prop-types";
import NamesFilter from "./NamesFilter";
import HouseFilter from "./HouseFilter";

const Filters = ({ updateName, inputName, updateHouse, inputHouse }) => {
  return (
    <>
      <NamesFilter updateName={updateName} inputName={inputName} />
      <HouseFilter updateHouse={updateHouse} inputHouse={inputHouse} />
    </>
  );
};
export default Filters;

Filters.propTypes = {
  updateName: PropTypes.func.isRequired,
  updateHouse: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  inputHouse: PropTypes.string.isRequired,
};
