import React from "react";
import "../App.css";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function CommentList({ comments }) {
  return (
    <div>
      <section className="commentList">
        <h4>Comments:</h4>
        <CommentAdder />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </div>
  );
}
