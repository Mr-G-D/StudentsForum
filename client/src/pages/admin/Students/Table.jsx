import React, { useEffect, useState } from "react";
import axios from "axios";
import Datatable from "react-data-table-component";

const columns = [
  { name: "id", label: "ID", selector: (row) => row.id },
  { name: "avatar", label: "Avatar", selector: (row) => row.avatar },
  { name: "firstName", label: "First name", selector: (row) => row.firstName },
  { name: "lastName", label: "Last name", selector: (row) => row.lastName },
  {
    name: "email",
    label: "E-Mail ID",
    selector: (row) => row.email,
  },
  { name: "college", label: "College", selector: (row) => row.college },
  { name: "course", label: "Course", selector: (row) => row.course },
  { name: "manage", label: "Manage", selector: (row) => row.manage },
];

export default function Table() {
  const [rows, setRows] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters",
    );

    setRows(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ minHeight: "73vh", width: "100%", margin: "0.5%" }}>
      <Datatable columns={columns} data={rows} pagination />
    </div>
  );
}
