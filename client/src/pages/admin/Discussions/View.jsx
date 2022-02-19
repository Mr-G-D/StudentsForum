import { ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { getDiscussion } from "api/main";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import { createComment } from "api/main";
import $ from "jquery";

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
        `https://dummyjson.com/posts/1/comments`,
      );
      setData(response.data.comments);
      const result = await getDiscussion(params.id);
      setDiscussion(result.data[0]);
    };
    fetchData();
  }, [params]);

  const postComment = async (event) => {
    event.preventDefault();
    if (text === undefined || text === "" || text === "<p><br></p>") {
      toast.error(`Comment cannot be empty.`, {
        theme: "colored",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const { result } = await JSON.parse(localStorage.getItem("profile"));
      createComment(params.id, text, result.firstName + " " + result.lastName);
      $(".editor-class")[0].innerHTML =
        '<div class="DraftEditor-root"><div class="public-DraftEditorPlaceholder-root"><div class="public-DraftEditorPlaceholder-inner" id="placeholder-42ji8" style="white-space: pre-wrap;"></div></div><div class="DraftEditor-editorContainer"><div aria-describedby="placeholder-42ji8" aria-label="rdw-editor" class="notranslate public-DraftEditor-content" contenteditable="true" role="textbox" spellcheck="false" style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;"><div data-contents="true"><div class="" data-block="true" data-editor="42ji8" data-offset-key="4mgpg-0-0"><div data-offset-key="4mgpg-0-0" class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"><span data-offset-key="4mgpg-0-0"><br data-text="true"></span></div></div></div></div></div></div>';
    }
  };
  return (
    <div className="">
      <Navbar />
      <Box display="flex" flexDirection="column" className="viewDiscussion">
        {discussion ? (
          <Box className="paper ">
            <Typography variant="h5" className="discussionTitle">
              {discussion.topic}
            </Typography>
            <Typography
              variant="subtitle2"
              className="discussionBody"
              dangerouslySetInnerHTML={{ __html: discussion.body }}
            ></Typography>
            <Grid
              flexDirection="row"
              justifyContent="space-between"
              className="discussionExtra"
              container
            >
              <Grid display="flex" flexDirection="row" alignItems="center">
                <img
                  src={`https://ui-avatars.com/api/?size=32&background=random&rounded=true&color=ffffff&name=${discussion.author}`}
                  alt="avatar"
                />
                <Typography className="discussionAuthor" variant="caption">
                  {discussion.author}
                </Typography>
              </Grid>
              <Typography className="discussionTime" variant="caption">
                {moment(discussion.created_at).fromNow()}
              </Typography>
            </Grid>
          </Box>
        ) : (
          <CircularProgress />
        )}
        <Box>
          <Box className="paper">
            <Editor
              placeholder="   Add Comment..."
              defaultEditorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              onChange={handleChange}
            />
            <Box className="submitComment">
              <Button
                onClick={postComment}
                type="Button"
                style={{
                  marginRight: "2%",
                }}
                variant="contained"
              >
                Post
              </Button>
            </Box>
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
      </Box>
    </div>
  );
};

export default View;
