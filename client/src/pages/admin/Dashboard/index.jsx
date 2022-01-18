import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../layouts/Navbar";
import "styles/admin/dashboard/index.css";
import StatBox from "./StatBox";
import AreaGraph from "./AreaGraph";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Box className="item">
        <Grid flex={3} className="graph">
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
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
