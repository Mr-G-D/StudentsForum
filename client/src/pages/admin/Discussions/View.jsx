import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";

const View = () => {
  const params = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/posts/${params.id}/comments`,
      );
      setData(response.data.comments);
    };
    fetchData();
  }, [params]);
  return (
    <div className="admin_layout">
      <Navbar />
      <Box className="paper viewDiscussion ">
        {data
          ? data.map((ele) => {
              return <Typography>{ele.body}</Typography>;
            })
          : ""}
      </Box>
    </div>
  );
};

export default View;
