import { Grid, Typography } from "@mui/material";
import React from "react";

const Discussion = (props) => {
  return (
    <Grid className="paper">
      <Typography>{props.data.title}</Typography>
      <Typography>{props.data.body}</Typography>
      <Grid container>
        <Typography>{props.data.userId}</Typography>
        <Typography>3 days ago</Typography>
      </Grid>
    </Grid>
  );
};

export default Discussion;
