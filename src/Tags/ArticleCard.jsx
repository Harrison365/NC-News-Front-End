import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import footballImg from "../football.png";
import codingImg from "../coding.jpeg";
import cookingImg from "../cooking.jpeg";

export default function ArticleCard({ article }) {
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
        <img
          src={
            article.topic === "football"
              ? footballImg
              : article.topic === "coding"
              ? codingImg
              : cookingImg
          }
          alt=""
          id="NcImageCard"
        />
      </div>
    </Link>
  );
}
