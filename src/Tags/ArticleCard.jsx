import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import IndividualArticle from "./IndividualArticle";

export default function ({ article }) {
  return (
    <Link to={`/article/${article.article_id}`}>
      <div className="articleCard">
        Title: {article.title} <br />
        Author: {article.author} <br />
        Topic: {article.topic}
        <br />
      </div>
    </Link>
  );
}
