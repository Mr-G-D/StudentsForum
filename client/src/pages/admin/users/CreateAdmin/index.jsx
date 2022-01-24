import { Box, Typography } from "@mui/material";
import Navbar from "pages/admin/layouts/Navbar";
import React from "react";

const CreateAdmin = () => {
  return (
    <div>
      <Navbar />
      <Box className="paper">
        <Typography fontFamily="serif" variant="h4">
          Create Admin
        </Typography>
      </Box>
    </div>
  );
};

export default CreateAdmin;
