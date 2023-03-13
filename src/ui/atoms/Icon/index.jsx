import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.css";

const Icon = ({ faIcon }) => {
  return (
    <>
      <FontAwesomeIcon icon={faIcon} size="2x" />
    </>
  );
};

Icon.propTypes = {
  image: PropTypes.string,
};

export default Icon;
