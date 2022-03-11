import React from "react";
import { deleteComment } from "../Fetch/api";

export default function DeleteComment({
  comment_id,
  author,
  setCommentDeleted,
  user,
}) {
  const handleDelete = () => {
    deleteComment(comment_id).then(() => {
      setCommentDeleted(true);
    });
  };

  if (author === user) {
    return (
      <div>
        Delete Comment:<button onClick={handleDelete}>❌</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}
