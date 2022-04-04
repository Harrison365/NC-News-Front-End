import React, { useEffect, useState } from "react";
import { postComment } from "../Fetch/api";
import "../App.css";

export default function CommentAdder({
  article_id,
  setComments,
  setCommentAdded,
  user,
}) {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      postComment(article_id, { body: text, username: user }).then(() => {
        setText("");
        setCommentAdded(true);
        setError(null);
      });
    }
    if (!text) {
      setError("Please Enter Text Before Submitting");
    }
  };
  if (error) {
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
        <h4 className="commentError">
          Please Enter Text Before Submitting Your Comment
        </h4>
      </div>
    );
  }
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
