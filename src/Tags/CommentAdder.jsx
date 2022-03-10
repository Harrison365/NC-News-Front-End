import React, { useEffect, useState } from "react";
import { postComment } from "../Fetch/api";

export default function CommentAdder({ article_id, setComments }) {
  const [text, setText] = useState("");
  const addComment = () => {
    setComments((comments) => {
      const currentComments = [...comments];
      currentComments.unshift({
        body: text,
        author: "grumpy19",
        created_at: "Just Now",
      });
      return currentComments;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsLoading(true);
    postComment(article_id, { body: text, username: "grumpy19" }).then(() => {
      // setisLoading(false);
      addComment();
      setText("");
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
