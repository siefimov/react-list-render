import React from "react";
import PropTypes from "prop-types";

const UserName = ({ name }) => {
  return <div className="font-semibold">{name}</div>;
};

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};

UserName.defaulProps = {
  name: "Avatar",
};

export default UserName;
