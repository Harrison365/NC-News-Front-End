import React from "react";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "../App.css";

export default function TopicButtons({ setTopicFilter }) {
  return (
    <div id="topicButtons">
      <Link to="/">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          All
        </AwesomeButton>
      </Link>
      <Link to="topics/coding">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Coding
        </AwesomeButton>
      </Link>
      <Link to="topics/cooking">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Cooking
        </AwesomeButton>
      </Link>
      <Link to="topics/football">
        <AwesomeButton size="medium" style={{ margin: 2 }}>
          Football
        </AwesomeButton>
      </Link>
    </div>
  );
}
