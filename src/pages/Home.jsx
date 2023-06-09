import React from "react";
import BuyerDashboard from "./BuyerDashboard";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="home" id="home">
      <Sidebar />
      <BuyerDashboard />
    </div>
  );
};

export default Home;
