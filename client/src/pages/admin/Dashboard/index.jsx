import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layouts/Navbar";
import "styles/admin/dashboard/index.css";
import StatBox from "./StatBox";
import AreaGraph from "./AreaGraph";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Grid container display="flex" className="item">
        <Grid flex={3} className="container">
          <Typography className="graphTitle" variant="subtitle1">
            Discussions Overview
          </Typography>
          <AreaGraph />
        </Grid>
        <Grid flex={1} className="box">
          <StatBox
            data="Discussions"
            count={500}
            icon="/assets/images/chat.png"
          />
          <StatBox
            data="students"
            count={300}
            icon="/assets/images/graduated.png"
          />
          <Grid className="notes">Notes</Grid>
        </Grid>
      </Grid>
      <Grid gap={1} container display="flex">
        <Grid className="container" flex={1}>
          Pie Chart
        </Grid>
        <Grid className="container" flex={2}>
          Activity Logs
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
