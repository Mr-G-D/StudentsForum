import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../../styles/auth/signup.css";
import axios from "axios";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Visibility from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [dob, setDob] = useState(null);
  const [college, setCollege] = useState(null);
  const [course, setCourse] = useState(null);

  let colleges = [];
  let courses = [];
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/auth/getColleges").then((response) => {
      response.data.forEach((element) => {
        colleges.push(element.CollegeName);
      });
      axios
        .get(`http://127.0.0.1:3001/auth/getCourses`, {
          params: {
            college: college,
          },
        })
        .then((response) => {
          response.data.forEach((element) => {
            courses.push(element);
          });
        });
    }, []);
  });

  const filteroptions = createFilterOptions({
    limit: 100,
    matchFrom: "start",
  });

  const handleCollege = (e) => {
    if (e.target.innerText !== null) {
      setCollege(e.target.innerText);
    }
  };

  const handleCourse = (e) => {
    if (e.target.innerText !== null) {
      setCourse(e.target.innerText);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container className="box" component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Visibility />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          <Visibility />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="Password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                  <DatePicker
                    required
                    fullWidth
                    label="Date of Birth"
                    maxDate={new Date()}
                    value={dob}
                    onChange={(date) => {
                      setDob(date);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="Colleges"
                  options={colleges}
                  sx={{ width: 300 }}
                  filterOptions={filteroptions}
                  onChange={(e) => handleCollege(e)}
                  renderInput={(params) => (
                    <TextField {...params} value={college} label="College" />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="Courses"
                  options={courses}
                  onChange={(e) => handleCourse(e)}
                  filterOptions={filteroptions}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} value={course} label="Courses " />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Course Beginning"
                    maxDate={new Date()}
                    value={start}
                    onChange={(date) => {
                      setStart(date);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    views={["year", "month"]}
                    label="Course End"
                    minDate={new Date(start)}
                    value={end}
                    onChange={(date) => {
                      setEnd(date);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
