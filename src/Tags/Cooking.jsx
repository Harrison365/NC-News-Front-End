import React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchCookingArticles } from "../Fetch/api";

export default function Coding() {
  const [cookingArticles, setCookingArticles] = useState([]);

  useEffect(() => {
    fetchCookingArticles().then((cookArticles) => {
      setCookingArticles(cookArticles);
    });
  }, []);

  return (
    <div>
      <section className="ArticleList">
        <h2>All Articles</h2>
        {cookingArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
