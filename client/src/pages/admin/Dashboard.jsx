import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import Navbar from "./layouts/Navbar";
import axios from "axios";

const Dashboard = () => {
  const populateDashboard = async () => {
    const req = await axios.get("http://127.0.0.1:3001/dashboard", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    // const data = req.json();
    console.log(req);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.href = "/";
      } else {
        populateDashboard();
      }
    } else {
      window.location.href = "/";
    }
  });
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
