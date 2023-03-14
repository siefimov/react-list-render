import React from "react";
import PropTypes from "prop-types";
import ItemOfList from "../molecules/ItemList";
import UserAvatar from "../atoms/UserAvatar";
import UserName from "../atoms/UserName";
import StarReview from "../atoms/StarReview";

const ListOfItems = ({ list }) => {
  return list.map((item) => (
    <ItemOfList
      key={`${item.id}${item.type}-key`}
      userAvatar={
        (item.type === "customers" || item.type === "reviews") && (
          <UserAvatar imgUrl={item.avatarImg} alt={item.alt} />
        )
      }
      starReview={item.star && <StarReview />}
      userName={<UserName name={item.name} />}
      textReview={item.type === "reviews" && item.text}
      product={item.extra && `product: ${item.extra.products}`}
      amount={item.extra && `amount: ${item.extra.amount}`}
      qty={item.extra && `qty: ${item.extra.qtyProducts}`}
      month={item.type === "revenue" && item.month}
      revenue={item.type === "revenue" && item.revenue}
    />
  ));
};

ListOfItems.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ListOfItems;
