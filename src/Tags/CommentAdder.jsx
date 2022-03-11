import React, { useEffect, useState } from "react";
import { postComment } from "../Fetch/api";

export default function CommentAdder({
  article_id,
  setComments,
  setCommentAdded,
  user,
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, { body: text, username: user }).then(() => {
      setText("");
      setCommentAdded(true);
    });
  };

  return (
    <div>
      <form>
        <input
          placeholder="Comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Comment</button>
        <button
          type="button"
          onClick={() => {
            setText("");
          }}
        >
          Clear
        </button>
        {/* ^^^ clears text */}
      </form>
    </div>
  );
}
