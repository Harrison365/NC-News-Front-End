import React from "react";
import { Link } from "react-router-dom";

export default function TopicButtons({ setTopicFilter }) {
  return (
    <div>
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
