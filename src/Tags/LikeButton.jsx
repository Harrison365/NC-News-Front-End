import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function LikeButton({
  setClick,
  patchVote,
  isClick,
  setLikes,
  params,
}) {
  return (
    <div>
      <AwesomeButton
        type="facebook"
        onPress={() => {
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
        Like
      </AwesomeButton>
    </div>
  );
}
