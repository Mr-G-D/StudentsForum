import React, { useState } from "react";
import Navbar from "pages/admin/layouts/Navbar";
import { Box, Button, Grid, Typography } from "@mui/material";
import "styles/admin/students/index.css";

const Students = () => {
  const [user, setUser] = useState("Students");
  return (
    <div>
      <Navbar />
      <Box className="container">
        <Typography fontFamily="serif" variant="h4">
          {user}
        </Typography>
      </Box>
    </div>
  );
};

export default Students;
