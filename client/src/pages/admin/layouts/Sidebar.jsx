import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

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
      <React.Fragment>
        <Drawer open={state} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ),
              )}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
