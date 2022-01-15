import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { toast, ToastContainer } from "react-toastify";
import { IconButton, InputAdornment } from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { signIn } from "actions/auth";
import { useHistory } from "react-router-dom";
// import  from "@mui/icons-material/Visibility";

const theme = createTheme();

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const history = useHistory();
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await dispatch(signIn(formData, history));
    if (response.data.message === "Invalid credentials") {
      toast.error(`Incorrect Password `, {
        theme: "colored",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (response.data.message === "User does not exist") {
      toast.error(`Incorrect E-Mail ID `, {
        theme: "colored",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (response.data.message === "success") {
      history.push("/");
      toast.success(`Log in Successfull `, {
        theme: "colored",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(response.data.message);
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={8}
          sx={{
            backgroundImage: `url('${process.env.REACT_APP_IMAGE_PATH}/bgCover.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6}>
          <Box
            sx={{
              my: 20,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handlePasswordVisibility}
                        aria-label="toggle password visibility"
                        edge="end"
                      >
                        {passwordVisibility ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                name="password"
                label="Password"
                type={passwordVisibility ? "text" : "password"}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <ToastContainer
                style={{ width: "auto", height: "10%", textSizeAdjust: "50%" }}
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/auth/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
