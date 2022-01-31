import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";

const View = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [discussion, setDiscussion] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/posts/${params.id}/comments`,
      );
      console.log(response.data);
      setData(response.data.comments);
      const result = await axios.get(
        `https://dummyjson.com/posts/${params.id}`,
      );
      setDiscussion(result.data);
    };
    fetchData();
  }, [params]);
  return (
    <div className="">
      <Navbar />
      <Box display="flex" flexDirection="column" className="viewDiscussion">
        {discussion ? (
          <Box className="paper ">
            <Typography variant="h5" className="discussionTitle">
              {discussion.title}
            </Typography>
            <Typography variant="subtitle2" className="discussionBody">
              {discussion.body}
            </Typography>
            <Grid flexDirection="row" justifyContent="space-between" container>
              <Typography className="discussionAuthor">
                {discussion.userId}
              </Typography>
              <Typography className="discussionTime">3 days ago</Typography>
            </Grid>
          </Box>
        ) : (
          <CircularProgress />
        )}
        <Box>
          {data ? (
            data.map((ele) => {
              return (
                <Box key={ele.id} className="paper">
                  <Typography display="flex" alignItems="center">
                    <img
                      style={{
                        padding: "1%",
                        borderRadius: "50%",
                      }}
                      src={`https://i.pravatar.cc/40?u=${ele.id}`}
                      alt="Avatar"
                    />
                    {ele.user.username}
                  </Typography>
                  <Typography marginLeft="50px">{ele.body}</Typography>
                  <Grid
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
                    <ThumbUpOutlined className="commentIcons" />
                    <ThumbDownOutlined className="commentIcons" />
                  </Grid>
                </Box>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default View;
