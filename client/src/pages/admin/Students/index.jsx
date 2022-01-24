import React, { useState } from "react";
import Navbar from "pages/admin/layouts/Navbar";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import "styles/admin/students/index.css";
import Table from "pages/admin/Students/Table";
import { PersonAdd } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Students = () => {
  const location = useLocation();
  const [user, setUser] = useState("Students");
  return (
    <div>
      <Navbar />
      <Box className="paper">
        <Typography fontFamily="serif" variant="h4">
          {user}
        </Typography>
        <Grid className="subtitle" display="flex">
          <Box className="create-admin">
            {/* {user === "Admin" ? ( */}
            <Link className="link" to={`${location.pathname}/create`}>
              <Button variant="contained">
                <PersonAdd
                  fontSize="small"
                  sx={{
                    marginRight: "4px",
                  }}
                />
                Create New Admin
              </Button>
            </Link>
            {/* ) : (
              ""
            )} */}
          </Box>
          <Box className="select-user" display="flex" gap={1}>
            <Typography variant="subtitle1">
              Which type of user would you like to see?
            </Typography>

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
        <Table user={user} />
      </Box>
    </div>
  );
};

export default Students;
