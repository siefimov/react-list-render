import React from "react";
import PropTypes from "prop-types";

import UserAvatar from "../../atoms/UserAvatar";
import UserName from "../../atoms/UserName";
import Icon from "../../atoms/Icon";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const DashboardValue = ({ img, name, text, type, id, star, extra, month }) => {
  const valueList = type.map((item) => {
    return (
      <div key={item.id + item.img} className="flex w-[300px] items-center mb-4">
        {(item.type === "customers" || item.type === "reviews") && (
          <UserAvatar imgUrl={item.avatarImg} alt={item.name} />
        )}
        {item.type === "customers" && <UserName name={item.name} />}

        <div className="flex flex-col">
          {item.star && (
            <span>
              <Icon faIcon={faStar} />
            </span>
          )}
          {item.extra && (
            <span className="px-3 ">
              product: <span className="text-sky-700 font-semibold">{item.extra.products}</span>
            </span>
          )}
          {item.extra && (
            <span className="px-3 ">
              amount: <span className="text-sky-700 font-semibold">{item.extra.amount}</span>
            </span>
          )}
          {item.extra && (
            <span className="px-3 ">
              quantity: <span className="text-sky-700 font-semibold">{item.extra.qtyProducts}</span>
            </span>
          )}
          {item.star && <p>{item.text}</p>}
        </div>
        {item.month && (
          <span>
            {`${item.month} ${item.revenue}`}
          </span>
        )}
      </div>
    );
  });

  return <div className="flex flex-col">{valueList}</div>;
};

DashboardValue.propTypes = {
  type: PropTypes.string.isRequired,
  img: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  extra: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object,
  ]),
};

export default DashboardValue;
