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
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

export default function SignUp() {
  const notify = (message) => {
    toast.error(`Please check your ${message} `, {
      theme: "colored",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValues.firstName === "") {
      notify("First Name");
      $("#firstName")[0].focus();
      return false;
    }
    if (formValues.lastName === "") {
      notify("Last Name");
      $("#lastName")[0].focus();
      return false;
    }
    if (formValues.email === "") {
      notify("E-Mail ID");
      $("#email")[0].focus();
      return false;
    }
    if (visibility.passwordValidate === false) {
      notify("Password");
      $("#password")[0].focus();
      return false;
    }
    if (dob === null) {
      notify("Date Of Birth");
      return false;
    }
    if (college === null) {
      notify("College");
      return false;
    }
    if (course === null) {
      notify("Course");
      return false;
    }
    if (start === null) {
      notify("Course Begin Date");
      return false;
    }
    if (end === null) {
      notify("Course End Date");
      return false;
    }

    const response = await axios.post("http://127.0.0.1:3001/auth/register", {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      dateOfBirth: dob,
      college: college,
      course: course,
      startDate: start,
      endDate: end,
    });
    console.log(response);
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    submit: true,
  });
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [dob, setDob] = useState(null);
  const [college, setCollege] = useState(null);
  const [course, setCourse] = useState(null);
  const [visibility, setVisibility] = useState({
    passwordVisibility: false,
    confirmPasswordVisibility: false,
    passwordValidate: true,
  });

  let colleges = [];
  let courses = [];
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/auth/getColleges").then((response) => {
      response.data.forEach((element) => {
        colleges.push(element.CollegeName);
      });
      if (college !== null) {
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
      }
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

  const handlePasswordVisibility = () => {
    setVisibility({
      ...visibility,
      passwordVisibility: !visibility.passwordVisibility,
    });
  };

  const handleConfirmPasswordVisibility = () => {
    setVisibility({
      ...visibility,
      confirmPasswordVisibility: !visibility.confirmPasswordVisibility,
    });
  };

  const validatePassword = () => {
    const password = $("#password");
    const confirmPassword = $("#confirmPassword");
    if (password[0].value !== confirmPassword[0].value) {
      setVisibility({
        ...visibility,
        passwordValidate: false,
      });
    } else {
      setVisibility({
        ...visibility,
        passwordValidate: true,
      });
    }
  };

  const handleChange = async (event) => {
    const { name, value } = event.target;
    await setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
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
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={formValues.firstName}
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
                  onChange={handleChange}
                  value={formValues.lastName}
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
                  onChange={handleChange}
                  value={formValues.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handlePasswordVisibility}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {visibility.passwordVisibility ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  name="password"
                  label="Password"
                  type={visibility.passwordVisibility ? "text" : "password"}
                  id="password"
                  onBlur={validatePassword}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={visibility.passwordValidate ? false : true}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleConfirmPasswordVisibility}
                          aria-label="toggle password visibility"
                          edge="end"
                        >
                          {visibility.confirmPasswordVisibility ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={
                    visibility.confirmPasswordVisibility ? "text" : "password"
                  }
                  id="confirmPassword"
                  onBlur={validatePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
                  <DatePicker
                    required
                    fullWidth
                    id="dateOfBirth"
                    name="dateOfBirth"
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
                  id="College"
                  options={colleges}
                  sx={{ width: 300 }}
                  filterOptions={filteroptions}
                  onChange={(e) => handleCollege(e)}
                  renderInput={(params) => (
                    <TextField {...params} value={college} label="College" />
                  )}
                />
              </Grid>
              <Grid item xs={12} display="flex">
                <Autocomplete
                  disablePortal
                  id="Course"
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
                    id="startDate"
                    name="startDate"
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
                    id="endDate"
                    name="endDate"
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
