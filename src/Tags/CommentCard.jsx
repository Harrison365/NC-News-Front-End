import React from "react";
import "../App.css";

export default function CommentCard({ comment }) {
  return (
    <div className="commentCard">
      <h5>
        {comment.author} at {comment.created_at}
      </h5>
      <h6>{comment.body}</h6>
      <button>❤️</button>
      {/* fontawesome icons */}
    </div>
  );
}
