import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, value, handleBtn, textBtn }) => {
  return (
    <>
      <button
        name={name}
        value={value}
        className="btn w-full border-sky-800 border border-solid mb-4 py-2 rounded-lg hover:bg-sky-100"
        onClick={handleBtn}
      >
        {textBtn}
      </button>
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleBtn: PropTypes.func,
  textBtn: PropTypes.string,
};

export default Button;
