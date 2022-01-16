import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import "styles/layouts/Sidebar.css";
import { Assessment, CastForEducation, Person } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
    if (open === false) {
      props.hideSidebar();
    }
  };
  useEffect(() => {
    setState(props.data);
  }, [props.data]);

  return (
    <div>
      <Drawer
        className="drawer"
        open={state}
        onClose={toggleDrawer(false)}
        classes={{
          paper: "drawerPaper",
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <Link className="link" to="/">
              <ListItem button key="Dashboard">
                <ListItemIcon>
                  <Assessment />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
            <Link className="link" to="students">
              <ListItem button key="Students">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Students" />
              </ListItem>
            </Link>
            <Link className="link" to="courses">
              <ListItem button key="Courses">
                <ListItemIcon>
                  <CastForEducation />
                </ListItemIcon>
                <ListItemText primary="Courses" />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
