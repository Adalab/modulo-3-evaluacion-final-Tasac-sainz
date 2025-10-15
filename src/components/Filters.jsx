import "react";
import PropTypes from "prop-types";
import NamesFilter from "./NamesFilter";

const Filters = ({ updateName, inputName }) => {
  return (
    <>
      <NamesFilter updateName={updateName} inputName={inputName} />
    </>
  );
};
export default Filters;
Filters.propTypes = {
  updateName: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
};
