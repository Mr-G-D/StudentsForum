import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
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
      setUser(response.data);
    };
    fetchUser();
  }, [params]);

  const avatarURL = `https://ui-avatars.com/api/?size=512&background=random&rounded=true&color=ffffff&name=${
    user?.firstName + "+" + user?.lastName
  }`;
  return (
    <div>
      <Navbar />
      <Grid className="paper">
        <Grid container className="upper-profile">
          <Grid container flex={3}>
            <Grid flex={1}>
              <img width={200} src={avatarURL} />
            </Grid>
            <Grid className="user-details" flex={3}>
              <Typography>{user?.firstName + " " + user?.lastName}</Typography>
              <Typography>{user?.emailID}</Typography>
              <Typography>{user?.college}</Typography>
              <Typography>{user?.course}</Typography>
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
