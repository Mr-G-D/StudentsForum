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
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";

const Create = () => {
  const history = useHistory();
  const notify = (message) => {
    toast.error(`${message} cannot be empty.`, {
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

  const [topic, setTopic] = useState("");
  const [body, setBody] = useState("");
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { result } = await JSON.parse(localStorage.getItem("profile"));
    if (topic === "") {
      notify("Topic");
      return false;
    }
    if (subject === "") {
      notify("Subject");
      return false;
    }
    if (body === "") {
      notify("Body");
      return false;
    }
    if (result === null) {
      return false;
    }
    const { data } = await submitDiscussion(topic, subject, body, result);
    if (data.message === "success") {
      history.push("/discussions");
    }
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
    </div>
  );
};

export default Create;
