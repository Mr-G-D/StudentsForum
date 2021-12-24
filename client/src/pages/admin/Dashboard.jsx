import { Box, Typography } from "@mui/material";
import React from "react";
import Navbar from "./layouts/Navbar";

const Dashboard = () => {
  return (
    <div sx={{ display: "flex" }}>
      <Navbar position="fixed" />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography>Hello World!</Typography>
      </Box>
    </div>
  );
};

export default Dashboard;
