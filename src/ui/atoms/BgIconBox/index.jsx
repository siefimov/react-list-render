import React from "react";
import PropTypes from "prop-types";

const BgIconBox = ({ bgColor, icon }) => {
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
      {icon}
    </div>
  );
};

BgIconBox.propTypes = {
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

BgIconBox.defaultProp = {
  icon: "",
};

export default BgIconBox;
