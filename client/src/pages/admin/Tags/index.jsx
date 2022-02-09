import { AddCircleOutline } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Navbar from "../layouts/Navbar";
import "styles/admin/tags.css";
import { createTag, readTags, deleteTag } from "api/main";

const Tags = () => {
  const [rows, setRows] = useState([
    {
      name: "Mess",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestiae.",
    },
    {
      name: "Transport",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, similique.",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await readTags();
      setRows(data?.data);
    };
    fetchData();
    return true;
  }, [rows]);

  const delTag = async (id) => {
    const del = await window.confirm("Are you sure ?");
    if (del === true) {
      // console.log(del);
      deleteTag(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("name") !== "" && data.get("desc") !== "") {
      createTag({
        name: data.get("name"),
        description: data.get("desc"),
      });
    }
  };

  let count = 1;
  const columns = [
    { name: "ID", selector: () => count++, maxWidth: "70px" },
    { name: "Name", selector: (rows) => rows.name, maxWidth: "200px" },
    {
      name: "Description",
      selector: (rows) => rows.description,
    },
    {
      name: "Action",
      center: true,
      maxWidth: "500px",
      selector: (rows) => (
        <Button
          className="delete-button"
          onClick={() => delTag(rows._id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      ),
    },
  ];
  return (
    <div className="admin_layout">
      <Navbar />
      <Box
        style={{
          height: "85vh",
        }}
        className="paper"
      >
        <Typography fontFamily="serif" variant="h4">
          Tags
        </Typography>

        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          className="tagsForm"
        >
          <Grid
            className="tag-name"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Grid className="new-tag" flex={1}>
              Name
            </Grid>
            <Grid flex={6}>
              <TextField
                name="name"
                size="small"
                id="outlined-basic"
                placeholder="Transport"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid
            className="tag-description"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Grid className="new-tag" flex={1}>
              Description
            </Grid>
            <Grid flex={6}>
              <TextField
                name="desc"
                size="small"
                id="outlined-basic"
                placeholder="consectetur adipisicing elit. Dolorum, molestiae."
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            style={{
              float: "right",
              marginRight: "2%",
            }}
            variant="contained"
          >
            Add{" "}
            <AddCircleOutline
              style={{
                marginLeft: "4px",
              }}
              fontSize="small"
            />
          </Button>
        </Box>
        <DataTable columns={columns} data={rows} />
      </Box>
    </div>
  );
};

export default Tags;
