import React from "react";
import PropTypes from "prop-types";

const BgIconBox = ({ bgColor, children }) => {
  const bgColorVariant = {
    darkCyan: "bg-[#0369A1]",
    orange: "bg-[#FFA500]",
    tomato: "bg-[#FF6347]",
    lightGreen: "bg-[#90EE90]",
  };

  return (
    <div
      className={`${bgColorVariant[bgColor]} w-16 h-20 rounded flex items-center justify-center`}
    >
      {children}
    </div>
  );
};

BgIconBox.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.elementType,
};

export default BgIconBox;
