import React, { useState } from "react";
import PropTypes from "prop-types";

import DashboardHeader from "../../molecules/DashboardHeader";
import DashboardValue from "../../molecules/DashboardValue";
import BgIconBox from "../../atoms/BgIconBox";
import Icon from "../../atoms/Icon";
import {
  faDollarSign,
  faMessage,
  faUserPlus,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import customers from "../../../utils/mockCustomers";
import reviews from "../../../utils/mockReviews";
import orders from "../../../utils/mockOrders";
import revenue from "../../../utils/mockRevenue";

const DashBoardBlock = () => {
  const [btnName, setBtnName] = useState("");

  const handleBtnName = (e) => {
    let name = e.target.name;
    btnName === "" ? setBtnName(name) : setBtnName((prevBtnName) => (prevBtnName = ""));
  };

  return (
    <div className="flex justify-between gap-5 max-w-7xl mx-auto">
      {/* ======== revenue =========== */}
      <div className="flex flex-col">
        <DashboardHeader title="Montly revenue" value="1 385 $US">
          <BgIconBox bgColor="darkCyan">
            <Icon faIcon={faDollarSign} />
          </BgIconBox>
        </DashboardHeader>
        <button
          name="revenue"
          className="btn border-sky-800 border border-solid mb-4 rounded-lg"
          onClick={handleBtnName}
        >
          {btnName === "revenue" ? "hide result" : "show result"}
        </button>
        {btnName === "revenue" && (
          <DashboardValue type={revenue} name={revenue.month} extra={revenue.amount} />
        )}
      </div>

      {/* =========== orders ========== */}
      <div className="flex flex-col">
        <DashboardHeader title="New Orders" value={orders.length}>
          <BgIconBox bgColor="orange">
            <Icon faIcon={faShoppingCart} />
          </BgIconBox>
        </DashboardHeader>
        <button
          name="orders"
          className="btn border-emerald-800 border border-solid mb-4 rounded-lg"
          onClick={handleBtnName}
        >
          {btnName === "orders" ? "hide result" : "show result"}
        </button>
        {btnName === "orders" && (
          <DashboardValue
            type={orders}
            imgUrl={orders.avatarImg}
            name={orders.name}
            alt={orders.name}
            extra={orders.extra}
            star={faStar}
          />
        )}
      </div>

      {/* =========== reviews ============= */}
      <div className="flex flex-col">
        <DashboardHeader title="Pending Reviewers" value={reviews.length}>
          <BgIconBox bgColor="tomato">
            <Icon faIcon={faMessage} />
          </BgIconBox>
        </DashboardHeader>
        <button
          name="reviews"
          className="btn border-emerald-800 border border-solid mb-4 rounded-lg"
          onClick={handleBtnName}
        >
          {btnName === "reviews" ? "hide result" : "show result"}
        </button>
        {btnName === "reviews" && (
          <DashboardValue
            type={reviews}
            imgUrl={reviews.avatarImg}
            name={reviews.name}
            alt={reviews.name}
            star={faStar}
          />
        )}
      </div>

      {/* customers */}
      <div className="flex flex-col">
        <DashboardHeader title="New Customers" value={customers.length}>
          <BgIconBox bgColor="lightGreen">
            <Icon faIcon={faUserPlus} />
          </BgIconBox>
        </DashboardHeader>
        <button
          name="customers"
          className="btn border-emerald-800 border border-solid mb-4 rounded-lg"
          onClick={handleBtnName}
        >
          {btnName === "customers" ? "hide result" : "show result"}
        </button>
        {btnName === "customers" && (
          <DashboardValue
            type={customers}
            imgUrl={customers.avatarImg}
            name={customers.name}
            alt={customers.name}
          />
        )}
      </div>
    </div>
  );
};

DashBoardBlock.propTypes = {};

export default DashBoardBlock;
