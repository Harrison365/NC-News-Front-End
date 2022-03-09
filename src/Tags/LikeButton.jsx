import React from "react";

export default function LikeButton({
  setClick,
  patchVote,
  isClick,
  setLikes,
  params,
}) {
  return (
    <div>
      <button
        onClick={() => {
          if (!isClick) {
            setLikes((likes) => {
              return (likes += 1);
            });
            patchVote(params.article_id, 1);
            setClick(true);
          } else {
            setLikes((likes) => {
              return (likes -= 1);
            });
            patchVote(params.article_id, -1);
            setClick(false);
          }
        }}
      >
        ❤️
      </button>
    </div>
  );
}
