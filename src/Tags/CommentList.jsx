import React, { useEffect } from "react";
import "../App.css";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import { fetchComments } from "../Fetch/api";
import { useState } from "react";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [commentAdded, setCommentAdded] = useState(false);
  const [user, setUser] = useState("grumpy19");

  useEffect(() => {
    setCommentDeleted(false);
    setCommentAdded(false);
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [commentDeleted, commentAdded]);

  return (
    <div>
      <section className="commentList">
        <h4>Comments Section</h4>
        User
        <select
          onChange={(e) => {
            setUser(e.target.value);
          }}
          id="userChooser"
        >
          <option value="grumpy19">grumpy19</option>
          <option value="cooljmessy">cooljmessy</option>
          <option value="jessjelly">jessjelly</option>
        </select>
        <CommentAdder
          article_id={article_id}
          setComments={setComments}
          comments={comments}
          setCommentAdded={setCommentAdded}
          user={user}
        />
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              setCommentDeleted={setCommentDeleted}
              user={user}
            />
          );
        })}
      </section>
    </div>
  );
}
