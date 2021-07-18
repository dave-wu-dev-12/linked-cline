import React from "react";
import "./Feed.css";
import Avatar from "@material-ui/core/Avatar";
import PostTypes from "./postTypes/PostTypes";
import PhotoIcon from "@material-ui/icons/Photo";
import VideocamIcon from "@material-ui/icons/Videocam";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CreateIcon from "@material-ui/icons/Create";

function Feed() {
  return (
    <div className="feedContainer">
      <div className="createPostContainer">
        <div className="userInfoAndPostContainer">
          <Avatar className="postInfoAvatar"></Avatar>
          <input
            className="postInfoText"
            type="text"
            placeholder="Start a post"
          />
        </div>
        <div className="userPostTypesContainer">
          <PostTypes Icon={PhotoIcon} text={"Photo"}></PostTypes>
          <PostTypes Icon={VideocamIcon} text={"Video"}></PostTypes>
          <PostTypes Icon={EventNoteIcon} text={"Event"}></PostTypes>
          <PostTypes Icon={CreateIcon} text={"Write Article"}></PostTypes>
        </div>
      </div>
      <div className="viewPostsContainer"></div>
    </div>
  );
}

export default Feed;
