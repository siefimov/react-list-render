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
  const [categoryValue, setCategoryValue] = useState({
    revenue: "",
    orders: "",
    reviews: "",
    customers: "",
  });

  const handleCategoryValue = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    categoryValue[e.target.name] === ""
      ? setCategoryValue((prevCategoryValue) => ({
          ...prevCategoryValue,
          [e.target.name]: e.target.value,
        }))
      : setCategoryValue((prevCategoryValue) => ({ ...prevCategoryValue, [e.target.name]: "" }));
  };

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
            value="revenue"
            handleBtn={handleCategoryValue}
            textBtn={categoryValue.revenue === "revenue" ? "hide result" : "show result"}
          />
          {categoryValue.revenue === "revenue" && <ListOfItems list={revenue} />}
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
            value="orders"
            handleBtn={handleCategoryValue}
            // handleBtn={handleOrdersBtnName}
            textBtn={categoryValue.orders === "orders" ? "hide result" : "show result"}
          />
          {categoryValue.orders === "orders" && <ListOfItems list={orders} />}
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
            value="reviews"
            handleBtn={handleCategoryValue}
            textBtn={categoryValue.reviews === "reviews" ? "hide result" : "show result"}
          />
          {categoryValue.reviews === "reviews" && <ListOfItems list={reviews} />}
        </div>

        {/* ======= customers ====== */}
        <div>
          <DashboardHeader
            title="New Customers"
            value={customers.length}
            children={<BgIconBox bgColor="lightGreen" icon={<Icon faIcon={faUserPlus} />} />}
          />
          <Button
            name="customers"
            value="customers"
            handleBtn={handleCategoryValue}
            textBtn={categoryValue.customers === "customers" ? "hide result" : "show result"}
          />
          {categoryValue.customers === "customers" && <ListOfItems list={customers} />}
        </div>
      </div>
    </div>
  );
};

export default Posters;
