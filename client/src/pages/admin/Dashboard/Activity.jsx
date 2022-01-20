import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import "styles/admin/dashboard/activity.css";

function createData(action, assignee, subject, time) {
  return { action, assignee, subject, time };
}

const rows = [
  createData("Started a new Discussion", "John Doe", "Hostel", "3 seconds ago"),
  createData(
    "Contributed to a Discussion",
    "Mary Jane",
    "Mess",
    "6 minutes ago",
  ),
  createData("Closed a Discussion", "Gwen Stacy", "Transport", "a day ago"),
];

const avatarURL = `https://ui-avatars.com/api/?size=32&background=random&rounded=true&color=ffffff&name=`;
const Activity = () => {
  return (
    // <Grid className="row" container display="flex">
    //   <Grid className="rowItem" flex={2} display="flex">
    //     <img
    //       src={avatarURL}
    //       alt="avatar"
    //       style={{
    //         padding: "1%",
    //       }}
    //     />
    //     <Typography className=" assignee">John Doe </Typography>
    //   </Grid>
    //   <Grid className="rowItem" flex={2}>
    //     <Typography>Discussion</Typography>
    //   </Grid>
    //   <Grid className="rowItem" flex={4}>
    //     <Typography>New Discussion added</Typography>
    //   </Grid>
    //   <Grid className="rowItem" flex={2}>
    //     <Typography>3 seconds ago</Typography>
    //   </Grid>
    // </Grid>
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, overflowX: "auto" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Action</TableCell>
            <TableCell align="left">Asignee</TableCell>
            <TableCell align="center">Subject</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Manage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.assignee}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.action}
              </TableCell>
              <TableCell className="assignee" align="left">
                <img
                  src={avatarURL + row.assignee}
                  alt="avatar"
                  style={{
                    padding: "2%",
                  }}
                />
                <Typography margin="5%" variant="subtitle2">
                  {row.assignee}
                </Typography>
              </TableCell>
              <TableCell align="center">{row.subject}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">View</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Activity;
