import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import Discussion from "./Discussion";

const Discussions = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Box className="paper">
        <Typography margin={0} className="activityTitle" variant="subtitle1">
          Discussions{" "}
        </Typography>
      </Box>
      {data
        ? data.map((ele) => {
            return <Discussion key={ele.id} data={ele} />;
          })
        : ""}
    </div>
  );
};

export default Discussions;
