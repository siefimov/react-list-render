import React from "react";
import PropTypes from "prop-types";

const UserAvatar = ({ imgUrl, alt }) => {
  return <img className="rounded-full w-36 px-4 py-4" src={imgUrl} alt={alt} />;
};

UserAvatar.propTypes = {
  imgUrl: PropTypes.string,
  alt: PropTypes.string,
};

UserAvatar.defaultProp = {
  imgUrl: "",
};

export default UserAvatar;
