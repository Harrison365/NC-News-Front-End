import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import IndividualArticle from "./IndividualArticle";

export default function ({ article }) {
  return (
    <Link to={`/article/${article.article_id}`}>
      <div className="articleCard">
        <h3>{article.title} </h3>
        Author: {article.author} <br />
        Topic: {article.topic}
        <br />
        Comments: {article.comment_count}
        <br />
        <br />
      </div>
    </Link>
  );
}
