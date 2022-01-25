import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  InputAdornment,
  IconButton,
  Autocomplete,
  createFilterOptions,
} from "@mui/material";
import $ from "jquery";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "pages/admin/layouts/Navbar";
import {
  MailOutlineOutlined,
  PersonOutlineOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { getColleges } from "api/main";
import "styles/admin/users/createAdmin.css";
import { getCourses } from "api/main";
import { createAdmin } from "api/main";
import { useHistory } from "react-router-dom";

const CreateAdmin = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    admin: true,
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
  const colleges = [];
  const courses = [];
  useEffect(() => {
    getColleges().then((response) => {
      response.data.forEach((element) => {
        colleges.push(element.CollegeName);
      });
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (college !== null) {
      getCourses(college).then((response) => {
        response.data.forEach((element) => {
          courses.push(element);
        });
      });
    }
    // eslint-disable-next-line
  }, [college]);
  const notify = (message) => {
    toast.error(`${message} cannot be empty!`, {
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

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
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

    const response = await createAdmin(
      formValues,
      college,
      course,
      start,
      end,
      dob,
    );
    if (response.data.error === "User already exists") {
      toast.error(`E-Mail ID already in use `, {
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
    if (response.data.message === "success") {
      history.push("/");
    }
  };

  return (
    <div>
      <Navbar />
      <Box className="paper">
        <Typography fontFamily="serif" variant="h4">
          Create Admin
        </Typography>
        <Box
          className="form"
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlined />
                    </InputAdornment>
                  ),
                }}
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={handleChange}
                value={formValues.firstName}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlined />
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
                      <MailOutlineOutlined />
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
          <Grid className="buttonGrid">
            <Button
              className="button"
              onClick={() => {
                history.goBack();
              }}
              variant="contained"
              color="warning"
            >
              Cancel
            </Button>
            <Button
              className="button"
              type="submit"
              variant="contained"
              color="primary"
            >
              Create
            </Button>
          </Grid>
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
        </Box>
      </Box>
    </div>
  );
};

export default CreateAdmin;
