import React from "react";
import "../App.css";

import DeleteComment from "./DeleteComment";

export default function CommentCard({ comment, user, setCommentDeleted }) {
  return (
    <div className="commentCard">
      <div id="commentText">
        <h5>
          {comment.author} ({comment.created_at[8]}
          {comment.created_at[9]}-{comment.created_at[5]}
          {comment.created_at[6]}-{comment.created_at[0]}
          {comment.created_at[1]}
          {comment.created_at[2]}
          {comment.created_at[3]}, {comment.created_at[11]}
          {comment.created_at[12]}
          {comment.created_at[13]}
          {comment.created_at[14]}
          {comment.created_at[15]})
        </h5>
        <h6>{comment.body}</h6>
      </div>
      {/* ❤️{comment.votes}
      <button>❤️</button> Not Functional, no Back End for Deleting Comments*/}
      <DeleteComment
        comment_id={comment.comment_id}
        author={comment.author}
        setCommentDeleted={setCommentDeleted}
        user={user}
      />
      {/* fontawesome icons */}
    </div>
  );
}
