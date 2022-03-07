import React from "react";
import "../App.css";

export default function ({ article }) {
  return (
    <div className="articleCard">
      Title: {article.title} <br />
      Author: {article.author} <br />
      Topic: {article.topic}
      <br />
    </div>
  );
}
