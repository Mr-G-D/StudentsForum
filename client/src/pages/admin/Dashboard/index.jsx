import { Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layouts/Navbar";
import "styles/admin/dashboard/index.css";
import StatBox from "./StatBox";
import AreaGraph from "./AreaGraph";
import Activity from "./Activity";
import PieGraph from "./PieGraph";

const Dashboard = () => {
  return (
    <div className=" admin_layout">
      <Navbar />
      <Grid container display="flex" className="item admin_layout">
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
          <StatBox data="Tags" count={7} icon="/assets/images/tag.png" />
        </Grid>
      </Grid>
      <Grid className="item" container display="flex">
        <Grid className="container" flex={1}>
          <Typography className="graphTitle" variant="subtitle1">
            Discussions Status
          </Typography>
          <PieGraph />
        </Grid>
        <Grid className="container" flex={2}>
          <Typography
            sx={{ marginBottom: "1%" }}
            className="activityTitle"
            variant="subtitle1"
          >
            Recent Activity
          </Typography>
          <Activity />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
