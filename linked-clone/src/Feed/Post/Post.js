import React from "react";
import "./Post.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import SendIcon from "@material-ui/icons/Send";
import PostTypes from "../postTypes/PostTypes";

function Post({
  PostUserName,
  PostFolloweCount,
  PostContent,
  PostLikeCount,
  PostCommentCount,
}) {
  return (
    <div className="singlePostContainer">
      <div className="postInformationAndOptionContainer">
        <div className="postIconAndInformation">
          <img
            className="logoImage"
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="logo"
          />
          <div className="postInfoAndFollowers">
            <h5>{PostUserName}</h5>
            <p>
              {PostFolloweCount} <span>Followers</span>
            </p>
          </div>
        </div>
        <MoreHorizIcon></MoreHorizIcon>
      </div>
      <div className="postTextContentContainer">
        <p>{PostContent}</p>
      </div>
      <div className="postReactionContainer">
        <ThumbUpIcon></ThumbUpIcon>
        <FavoriteIcon></FavoriteIcon>
        <p>{PostLikeCount}</p>
        <p>
          {PostCommentCount} <span>comments</span>
        </p>
      </div>
      <div className="postReactionActionsContainer">
        <PostTypes Icon={ThumbUpIcon} text={"Like"}></PostTypes>
        <PostTypes Icon={CommentIcon} text={"Comment"}></PostTypes>
        <PostTypes Icon={KeyboardReturnIcon} text={"Share"}></PostTypes>
        <PostTypes Icon={SendIcon} text={"Send"}></PostTypes>
      </div>
    </div>
  );
}

export default Post;
