import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <div className="home" id="home">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
