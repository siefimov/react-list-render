import React, { useState } from "react";
import {
  faDollarSign,
  faMessage,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import BgIconBox from "../../ui/atoms/BgIconBox";
import Icon from "../../ui/atoms/Icon";
import DashboardHeader from "../../ui/molecules/DashboardHeader";
import ListOfItems from "../../ui/organisms/ListOfItems";
import orders from "../../utils/mockOrders";
import customers from "../../utils/mockCustomers";
import reviews from "../../utils/mockReviews";
import revenue from "../../utils/mockRevenue";
import Button from "../../ui/atoms/Button";

const Posters = () => {
  const [buttonName, setBtnName] = useState("");

  const [revenueBtnName, setRevenueBtnName] = useState("");
  const handleRevenueBtnName = (e) => {
    revenueBtnName === "" ? setRevenueBtnName(e.target.name) : setRevenueBtnName("");
  };

  const [reviewsBtnName, setReviewsBtnName] = useState("");
  const handleReviewsBtnName = (e) => {
    reviewsBtnName === "" ? setReviewsBtnName(e.target.name) : setReviewsBtnName("");
  };

  const [ordersBtnName, setOrderBtnName] = useState("");
  const handleOrdersBtnName = (e) => {
    ordersBtnName === "" ? setOrderBtnName(e.target.name) : setOrderBtnName("");
  };

  const handleButton = (e) => {
    console.log(e.target.name);
    buttonName === "" ? setBtnName(e.target.name) : setBtnName("");
  };
  console.log(buttonName);

  return (
    <div className="px-4 mx-auto">
      <div className="flex gap-4 max-w-screen-xl mx-auto">
        {/* ====== revenue ========= */}
        <div>
          <DashboardHeader
            title="Montly revenue"
            value="1 385 $US"
            children={<BgIconBox bgColor="darkCyan" icon={<Icon faIcon={faDollarSign} />} />}
          />
          <Button
            name="revenue"
            textBtn={revenueBtnName === "revenue" ? "hide result" : "show result"}
            handleBtn={handleRevenueBtnName}
          />
          {revenueBtnName === "revenue" && <ListOfItems list={revenue} />}
        </div>

        {/* ====== orders ========= */}
        <div>
          <DashboardHeader
            title="New Orders"
            value={orders.length}
            children={<BgIconBox bgColor="orange" icon={<Icon faIcon={faShoppingCart} />} />}
          />
          <Button
            name="orders"
            handleBtn={handleOrdersBtnName}
            textBtn={ordersBtnName === "orders" ? "hide result" : "show result"}
          />
          {ordersBtnName === "orders" && <ListOfItems list={orders} />}
        </div>

        {/* ======  reviews ========= */}
        <div>
          <DashboardHeader
            title="Pending Reviewers"
            value={reviews.length}
            children={<BgIconBox bgColor="tomato" icon={<Icon faIcon={faMessage} />} />}
          />
          <Button
            name="reviews"
            handleBtn={handleReviewsBtnName}
            textBtn={reviewsBtnName === "reviews" ? "hide result" : "show result"}
          />
          {reviewsBtnName === "reviews" && <ListOfItems list={reviews} />}
        </div>

        {/* ======= customers ====== */}
        <div>
          <DashboardHeader
            title="New Customers"
            value={customers.length}
            children={<BgIconBox bgColor="lightGreen" icon={<Icon faIcon={faUserPlus} />} />}
          />
          <Button
            handleBtn={handleButton}
            name="customers"
            textBtn={buttonName === "customers" ? "hide result" : "show result"}
          />
          {buttonName === "customers" && <ListOfItems list={customers} />}
        </div>
      </div>
    </div>
  );
};

export default Posters;
