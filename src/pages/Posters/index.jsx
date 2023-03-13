import React from "react";
import {
  faDollarSign,
  faMessage,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import BgIconBox from "../../ui/atoms/BgIconBox";
import Icon from "../../ui/atoms/Icon";
import DashboardHeader from "../../ui/molecules/DashboardHeader";

import DashBoardBlock from "../../ui/organisms/DashBoardBlock";
import DashboardValue from "../../ui/molecules/DashboardValue";
import customers from "../../utils/mockCustomers";

const Posters = () => {
  return (
    <div className="px-4">
      <DashBoardBlock />
    </div>
  );
};

export default Posters;
