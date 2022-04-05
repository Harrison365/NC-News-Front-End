import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ncLogo from "../NC.jpeg";
import IndividualArticle from "./IndividualArticle";

export default function ({ article }) {
  return (
    <Link to={`/article/${article.article_id}`}>
      <div className="articleCard">
        <div id="articleCardText">
          <h3>{article.title} </h3>
          Author: {article.author} <br />
          Topic: {article.topic}
          <br />
          Likes: {article.votes}
          <br />
          Comments: {article.comment_count}
        </div>
        <img src={ncLogo} id="NcImageCard" />
      </div>
    </Link>
  );
}
