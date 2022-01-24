import React, { useEffect, useState } from "react";
import Datatable from "react-data-table-component";
import { fetchUsers } from "api/main";
import { Button } from "@mui/material";

let count = 1;
const columns = [
  { name: "ID", selector: () => count++, maxWidth: "70px" },
  {
    name: "Avatar",
    selector: (row) => {
      const url = `https://ui-avatars.com/api/?size=32&background=random&rounded=true&color=ffffff&name=${
        row?.firstName + "+" + row?.lastName
      }`;
      return <img src={url} alt="Avatar" />;
    },
    maxWidth: "90px",
  },
  { name: "First name", selector: (row) => row.firstName, maxWidth: "120px" },
  { name: "Last name", selector: (row) => row.lastName, maxWidth: "120px" },
  {
    name: "E-Mail ID",
    selector: (row) => row.emailID,
  },
  { name: "College", selector: (row) => row.college },
  { name: "Course", selector: (row) => row.course },
  {
    name: "Manage",
    center: true,
    selector: () => (
      <Button className="manage-button" variant="contained" color="warning">
        View
      </Button>
    ),
  },
];

export default function Table(props) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUsers(props.user === "Admin" ? true : false);

      setRows(response.data);
      count = 1;
    };
    fetchData();
  }, [props.user]);

  return (
    <div style={{ minHeight: "73vh", width: "100%", margin: "0.5%" }}>
      <Datatable sortServer columns={columns} data={rows} pagination />
    </div>
  );
}
