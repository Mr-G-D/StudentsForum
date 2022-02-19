import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Discussion from "./Discussion";
import "styles/admin/discussions.css";
import { Link } from "react-router-dom";
import { readTags } from "api/main";
import { getDiscussions } from "api/main";

const Discussions = () => {
  const [data, setData] = useState();
  const [labels, setLabels] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const discussions = await getDiscussions();
      setData(discussions.data.discussions);
      // const response = await axios.get("https://dummyjson.com/posts");
      // setData([...data, response.data.posts]);
      const tags = await readTags();
      setLabels(tags.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className=" admin_layout">
      <Navbar />
      <Box className="paper">
        <Typography margin={0} className="activityTitle" variant="subtitle1">
          Discussions
          <Link to="discussion/create">
            <Button
              className="create_discussion"
              variant="contained"
              color="primary"
            >
              Create Discussion
            </Button>
          </Link>
        </Typography>
      </Box>
      <Box className="discussionsMain">
        <Grid className="paper" flex={1}>
          <Typography margin={0} className="activityTitle" variant="subtitle1">
            Filters
          </Typography>
          <Box className="filters">
            {labels ? (
              labels.map((element) => (
                <FormControlLabel
                  key={element._id}
                  control={<Checkbox defaultChecked />}
                  label={element.name}
                />
              ))
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Grid>
        <Grid flex={5} className="discussions">
          {data ? (
            data.map((ele) => {
              return <Discussion key={ele._id} data={ele} />;
            })
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Discussions;
