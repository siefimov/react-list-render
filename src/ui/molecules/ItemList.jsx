import React from "react";
import PropTypes, { element } from "prop-types";
import UserAvatar from "../atoms/UserAvatar";
import UserName from "../atoms/UserName";

const ItemOfList = (props) => {
  const { userAvatar, userName, starReview, textReview, product, amount, qty, month, revenue } =
    props;
  return (
    <div className="flex mb-4 max-w-[300px] border-b border-blue-200 border-solid">
      {userAvatar}
      <div className="star mr-4">
        {starReview}
        {textReview}
        {userName}
      </div>
      <div className="flex flex-col">
        <p>{product}</p>
        <p>{amount}</p>
        <p>{qty}</p>
      </div>
      {month}
      {revenue}
    </div>
  );
};

ItemOfList.propTypes = {
  userAvatar: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  userName: PropTypes.element,
  starReview: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  product: PropTypes.string,
  amount: PropTypes.string,
  qty: PropTypes.string,
  month: PropTypes.bool,
  revenue: PropTypes.bool,
};

export default ItemOfList;
