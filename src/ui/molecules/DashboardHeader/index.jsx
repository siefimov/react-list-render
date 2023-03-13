import React from "react";
import PropTypes from "prop-types";


const DashboardHeader
 = ({ title, value, children }) => {
  return (
    <div className="flex justify-between w-[300px] mb-4 px-5 py-5 shadow-md cursor-pointer" >
      {children}
      <div className="flex flex-col self-end">
        <h2>{title}</h2>
        <span className="text-2xl font-bold self-end">{value}</span>
      </div>
    </div>
  );
};

DashboardHeader
.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired,
};

export default DashboardHeader
;
