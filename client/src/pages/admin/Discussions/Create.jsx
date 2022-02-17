import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { readTags } from "api/main";
import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import { submitDiscussion } from "api/main";

const Create = () => {
  // const [formData, setFormData] = useState({
  //   topic: "",
  //   body: "",
  // });
  const [topic, setTopic] = useState("");
  const [body, setBody] = useState();
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await readTags();
      setLabels(data.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    setBody(contentState);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submitDiscussion(topic, subject, body);
  };
  return (
    <div className="admin_layout">
      <Navbar />
      <Box className="paper">
        <Typography fontFamily="serif" variant="h4">
          Start Discussion
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
              Heading
            </Grid>
            <Grid flex={6}>
              <TextField
                value={topic}
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
                name="name"
                size="small"
                id="outlined-basic"
                placeholder="Topic"
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
              Subject
            </Grid>
            <Grid flex={6}>
              <Select
                className="select"
                variant="outlined"
                size="small"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">Select</MenuItem>
                {labels?.map((element) => (
                  <MenuItem key={element._id} value={element.name}>
                    {element.name}
                  </MenuItem>
                ))}
              </Select>
              {/* <TextField
                name="desc"
                size="small"
                id="outlined-basic"
                placeholder="consectetur adipisicing elit. Dolorum, molestiae."
                variant="outlined"
              /> */}
            </Grid>
          </Grid>

          <Grid
            className="tag-name"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Grid className="new-tag" flex={1}>
              Body
            </Grid>
            <Grid flex={6}>
              <Editor
                placeholder="Body"
                defaultEditorState={editorState}
                value={body}
                onEditorStateChange={setEditorState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onChange={handleChange}
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
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Create;
