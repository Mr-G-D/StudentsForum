import { Grid, Typography } from "@mui/material";
import React from "react";
import "styles/admin/discussions.css";

const Discussion = (props) => {
  return (
    <Grid className="paper">
      <Typography variant="h5" className="discussionTitle">
        {props.data.title}
      </Typography>
      <Typography variant="subtitle2" className="discussionBody">
        {props.data.body}
      </Typography>
      <Grid flexDirection="row" justifyContent="space-between" container>
        <Typography className="discussionAuthor">
          {props.data.userId}
        </Typography>
        <Typography className="discussionTime">3 days ago</Typography>
      </Grid>
    </Grid>
  );
};

export default Discussion;
