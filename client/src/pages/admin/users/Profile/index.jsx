import React from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "pages/admin/layouts/Navbar";
import "styles/admin/users/profile.css";

const Profile = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <Grid className="paper">
        <Grid container className="upper-profile">
          <Grid container flex={3}>
            <Grid flex={1}>Avatar</Grid>
            <Grid container flex={3}>
              Details
            </Grid>
          </Grid>
          <Grid container flex={1}>
            Stat Box
          </Grid>
        </Grid>
        <Grid className="lower-profile">Discussions</Grid>
      </Grid>
    </div>
  );
};

export default Profile;
