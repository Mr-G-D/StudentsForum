import { Box, Grid } from "@mui/material";
import React from "react";
import Navbar from "../layouts/Navbar";
import LineGraph from "./LineGraph";
import "styles/admin/dashboard/index.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box className="item">
        <Grid flex={2} className="box" boxShadow={2}>
          <LineGraph className="line-graph" />
        </Grid>
        <Grid className="box" flex={1}>
          <Grid container flexDirection="row">
            <Box flex={1} p={1}>
              2
            </Box>
            <Box flex={1} p={1}>
              1
            </Box>
          </Grid>
          <Grid container flexDirection="row">
            <Box flex={1} p={1}>
              2
            </Box>
            <Box flex={1} p={1}>
              1
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
