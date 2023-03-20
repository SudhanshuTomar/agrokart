import React from "react";
import { Button } from "@mui/material";

const SideBar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <img className="user-img"
        src="https://images.unsplash.com/photo-1679085729914-9cae3e166516?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80"
        alt=""
      />
      <h1 className="first-name">Aman</h1>
      <h1 className="last-name">Swarnakar</h1>
      <div className="user-details" id="user-details">
        <p>Email: aman@gmail.com</p>
        <p>Phone: 9564829073</p>
        <p>Address: Dighi Hills, Pune</p>
      </div>
      <Button variant="contained" color="primary">Edit Details</Button>
    </div>
  );
};

export default SideBar;
