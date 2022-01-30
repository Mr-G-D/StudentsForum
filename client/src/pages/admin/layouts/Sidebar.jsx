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
import {
  Assessment,
  Chat,
  Grade,
  LocalOffer,
  Person,
} from "@mui/icons-material";
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
            <Link className="link" to="/users">
              <ListItem button key="users">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>
          </List>
          <Divider />
          <Link className="link" to="/discussions">
            <ListItem button key="Discussions">
              <ListItemIcon>
                <Chat />
              </ListItemIcon>
              <ListItemText primary="Discussions" />
            </ListItem>
          </Link>
          <Link className="link" to="/tags">
            <ListItem button key="Tags">
              <ListItemIcon>
                <LocalOffer />
              </ListItemIcon>
              <ListItemText primary="Tags" />
            </ListItem>
          </Link>
          <Link className="link" to="/important">
            <ListItem button key="important">
              <ListItemIcon>
                <Grade />
              </ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
          </Link>
        </Box>
      </Drawer>
    </div>
  );
}
