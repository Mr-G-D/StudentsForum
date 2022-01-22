import React, { useState } from "react";
import Navbar from "pages/admin/layouts/Navbar";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
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
        <Grid className="subtitle" display="flex">
          <Box className="create-admin">
            <Button variant="contained">Create New Admin</Button>
          </Box>
          <Box className="select-user" display="flex" gap={0.5}>
            <Typography variant="subtitle1">The List below is of</Typography>

            <Select
              className="select"
              variant="standard"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="Students">Students</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Students;
