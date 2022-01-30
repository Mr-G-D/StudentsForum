import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Discussion from "./Discussion";
import "styles/admin/discussions.css";

const Discussions = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/posts");
      setData(response.data.posts);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Box className="paper">
        <Typography margin={0} className="activityTitle" variant="subtitle1">
          Discussions
        </Typography>
      </Box>
      <Box className="discussionsMain">
        <Grid className="paper" flex={1}>
          <Typography margin={0} className="activityTitle" variant="subtitle1">
            Filters
          </Typography>
          <Box className="filters">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Label"
            />
          </Box>
        </Grid>
        <Grid flex={5} className="discussions">
          {data
            ? data.map((ele) => {
                return <Discussion key={ele.id} data={ele} />;
              })
            : ""}
        </Grid>
      </Box>
    </div>
  );
};

export default Discussions;
