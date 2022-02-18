import { Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import "styles/admin/discussions.css";

const Discussion = (props) => {
  return (
    <Grid className="paper">
      <Link className="link" to={"discussion/" + props.data.id + "/view"}>
        <Grid display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h5" className="discussionTitle">
            {props.data.topic}
          </Typography>
          <Typography variant="subtitle2" className="discussionBody">
            {props.data.subject}
          </Typography>
        </Grid>
        <Typography
          variant="subtitle2"
          className="discussionBody"
          dangerouslySetInnerHTML={{ __html: props.data.body }}
        ></Typography>
        <Grid flexDirection="row" justifyContent="space-between" container>
          <Typography variant="caption" className="discussionAuthor">
            {props.data.author}
          </Typography>
          <Typography className="discussionTime">
            {moment(props.data.created_at).fromNow()}
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Discussion;
