import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const View = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [discussion, setDiscussion] = useState();
  const [text, setText] = useState();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const handleChange = (e) => {
    const contentState = stateToHTML(editorState.getCurrentContent());
    // JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    setText(contentState);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/posts/${params.id}/comments`,
      );
      setData(response.data.comments);
      const result = await axios.get(
        `https://dummyjson.com/posts/${params.id}`,
      );
      setDiscussion(result.data);
    };
    fetchData();
  }, [params]);
  return (
    <div className="">
      <Navbar />
      <Box display="flex" flexDirection="column" className="viewDiscussion">
        {discussion ? (
          <Box className="paper ">
            <Typography variant="h5" className="discussionTitle">
              {discussion.title}
            </Typography>
            <Typography variant="subtitle2" className="discussionBody">
              {discussion.body}
            </Typography>
            <Grid flexDirection="row" justifyContent="space-between" container>
              <Typography className="discussionAuthor">
                {discussion.userId}
              </Typography>
              <Typography className="discussionTime">3 days ago</Typography>
            </Grid>
          </Box>
        ) : (
          <CircularProgress />
        )}
        <Box>
          <Box className="paper">
            <Typography>Add Comment... </Typography>
            <Editor
              placeholder="   Add Comment..."
              defaultEditorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onChange={handleChange}
            />
          </Box>
          <Box key={1} className="paper">
            <Typography display="flex" alignItems="center">
              <img
                style={{
                  padding: "1%",
                  borderRadius: "50%",
                }}
                src={`https://i.pravatar.cc/40?u=1`}
                alt="Avatar"
              />
              Show how to display html data
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{ __html: text }}
              marginLeft="50px"
            ></Typography>
            <Grid display="flex" flexDirection="row" justifyContent="flex-end">
              <ThumbUpOutlined className="commentIcons" />
              <ThumbDownOutlined className="commentIcons" />
            </Grid>
          </Box>
          {data ? (
            data.map((ele) => {
              return (
                <Box key={ele.id} className="paper">
                  <Typography display="flex" alignItems="center">
                    <img
                      style={{
                        padding: "1%",
                        borderRadius: "50%",
                      }}
                      src={`https://i.pravatar.cc/40?u=${ele.id}`}
                      alt="Avatar"
                    />
                    {ele.user.username}
                  </Typography>
                  <Typography marginLeft="50px">{ele.body}</Typography>
                  <Grid
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
                    <ThumbUpOutlined className="commentIcons" />
                    <ThumbDownOutlined className="commentIcons" />
                  </Grid>
                </Box>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </div>
  );
};

export default View;
