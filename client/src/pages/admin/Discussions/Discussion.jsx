import { Grid, Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import "styles/admin/discussions.css";

const Discussion = (props) => {
  return (
    <Grid className="paper">
      <Link className="link" to={"discussion/" + props.data._id + "/view"}>
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
        <Grid
          flexDirection="row"
          justifyContent="space-between"
          className="discussionExtra"
          container
        >
          <Grid display="flex" flexDirection="row" alignItems="center">
            <img
              src={`https://ui-avatars.com/api/?size=32&background=random&rounded=true&color=ffffff&name=${props.data.author}`}
              alt="avatar"
            />
            <Typography className="discussionAuthor" variant="caption">
              {props.data.author}
            </Typography>
          </Grid>
          <Typography className="discussionTime" variant="caption">
            {moment(props.data.created_at).fromNow()}
          </Typography>
        </Grid>
      </Link>
    </Grid>
  );
};

export default Discussion;
