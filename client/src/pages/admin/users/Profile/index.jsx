import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "pages/admin/layouts/Navbar";
import "styles/admin/users/profile.css";
import { getUser } from "api/main";

const Profile = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(params.id);
      setUser(response);
      console.log(user, response);
    };
    fetchUser();
  });

  //   const avatarURL = `https://ui-avatars.com/api/?size=32&background=random&rounded=true&color=ffffff&name=${
  //     user?.result?.firstName + "+" + user?.result?.lastName
  //   }`;
  return (
    <div>
      <Navbar />
      <Grid className="paper">
        <Grid container className="upper-profile">
          <Grid container flex={3}>
            <Grid flex={1}>{/* <img src={url} /> */}</Grid>
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
