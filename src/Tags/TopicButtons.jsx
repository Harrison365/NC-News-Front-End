import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function TopicButtons({ setTopicFilter }) {
  return (
    <div id="topicButtons">
      <Link to="/">
        <button>All</button>
      </Link>
      <Link to="topics/coding">
        <button>Coding</button>
      </Link>
      <Link to="topics/cooking">
        <button>Cooking</button>
      </Link>
      <Link to="topics/football">
        <button>Football</button>
      </Link>
    </div>
  );
}
