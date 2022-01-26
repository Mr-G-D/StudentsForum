import React, { useEffect, useState } from "react";
import { CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "pages/admin/layouts/Navbar";
import "styles/admin/users/profile.css";
import { getUser } from "api/main";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(params.id);
      await setUser(response.data);
      setLoading(false);
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
              {loading ? (
                <CircularProgress />
              ) : (
                <img width={200} src={avatarURL} alt="Avatar" />
              )}
            </Grid>
            {loading ? (
              <Grid className="user-details-container" flex={3}>
                <CircularProgress />
              </Grid>
            ) : (
              <Grid className="user-details-container" flex={3}>
                <Typography className="user-details">
                  Name:
                  <Typography className="user-value">
                    {user?.firstName + " " + user?.lastName}
                  </Typography>
                </Typography>
                <Typography className="user-details">
                  Email-ID:
                  <Typography className="user-value">
                    {user?.emailID}
                  </Typography>
                </Typography>
                <Typography className="user-details">
                  College:
                  <Typography className="user-value">
                    {user?.college}
                  </Typography>
                </Typography>
                <Typography className="user-details">
                  Course
                  <Typography className="user-value">{user?.course}</Typography>
                </Typography>
              </Grid>
            )}
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
