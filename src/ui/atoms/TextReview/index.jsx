import React from "react";
import PropTypes from "prop-types";

const TextReview = ({ text }) => {
  return <div>{text}</div>;
};

TextReview.propTypes = {
  text: PropTypes.string,
};

export default TextReview;
