// Post.js
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, TextField, Button } from "@mui/material";
import React, { useState, useRef } from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post({ user, postImage, likes, timestamp, onLike }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const postRef = useRef(null);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
      setIsLiked(true);
      onLike(); // Call the parent component's onLike function
    }else{
      setLikeCount(likeCount - 1);
      setIsLiked(false);
    }
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { user: "currentUser", text: newComment }]);
      setNewComment("");
      setShowCommentForm(false); // Hide the comment form after adding a comment
    }
  };

  return (
    <div className="post" ref={postRef}>
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar style={{ marginRight: "10px" }}>
            {user.charAt(0).toUpperCase()}
          </Avatar>{" "}
          {user} • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image" onClick={handleLike}>
        <img src={postImage} alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon
              className={`postIcon ${isLiked ? "liked" : ""}`}
              onClick = {handleLike}
            />
            <ChatBubbleOutlineIcon
              className="postIcon"
              onClick={() => setShowCommentForm(!showCommentForm)}
            />
          </div>
          <div className="post__iconSave">
            <BookmarkBorderIcon className="postIcon" />
          </div>
        </div>
        Liked by {likeCount} people.
        {/* Display comments */}
        <div className="post__comments">
          {comments.map((comment, index) => (
            <div key={index} className="post__comment">
              {comment.user !== "currentUser" && (
                <Avatar style={{ marginRight: "5px" }}>
                  {comment.user.charAt(0).toUpperCase()}
                </Avatar>
              )}
              <span>{comment.text}</span>
            </div>
          ))}
        </div>
        {/* Comment form */}
        {showCommentForm && (
          <div
            className="post__commentForm"
            style={{
              border: "1px solid silver",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Add a comment..."
              value={newComment}
              onChange={handleCommentChange}
              InputProps={{
                style: { color: "white" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddComment}
              style={{ marginTop: "10px" }}
            >
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
