import React, { useEffect } from "react";
import "../App.css";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { fetchComments } from "../Fetch/api";
import { useState } from "react";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, []);

  return (
    <div>
      <section className="commentList">
        <h4>Comments:</h4>
        <CommentAdder
          article_id={article_id}
          setComments={setComments}
          comments={comments}
        />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    </div>
  );
}
