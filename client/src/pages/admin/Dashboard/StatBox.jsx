import { Grid, Typography } from "@mui/material";
import React from "react";
import "styles/admin/dashboard/statbox.css";

const StatBox = (props) => {
  return (
    <Grid container className="statBox">
      <Grid flex={6}>
        <Typography className="title" variant="subtitle1">
          {props.data}
        </Typography>
        <Typography className="content" variant="h6">
          {props.count}
        </Typography>
      </Grid>
      <Grid className="icon" flex={1}>
        <img className="img" src={props.icon} alt="" />
      </Grid>
    </Grid>
  );
};

export default StatBox;
