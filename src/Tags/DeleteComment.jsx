import React from "react";
import { deleteComment } from "../Fetch/api";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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
      <div id="commentDeleteButton">
        <AwesomeButton size="small" type="pinterest" onPress={handleDelete}>
          Delete
        </AwesomeButton>
      </div>
    );
  } else {
    return <div></div>;
  }
}
