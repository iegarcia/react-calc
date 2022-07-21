import React from "react";
import PropTypes from "prop-types"; //Libreria con tipados para validar tipados de las propiedas de los componentes

const Result = ({ value }) => <div className="result">{value}</div>;

Result.propTypes = {
  //parte de componente
  value: PropTypes.string.isRequired, // libreria importada
};

Result.defaultProps = {
  // Props por defecto
  value: "0",
};

export default Result;
