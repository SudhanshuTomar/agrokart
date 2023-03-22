import React from "react";
import BuyerDashboard from "./BuyerDashboard";
import Sidebar from "../components/Sidebar";
const BuyerHome = () => {
  return (
    <div className="home" id="home">
      <Sidebar />
      <BuyerDashboard />
    </div>
  );
};

export default BuyerHome;
