import React, { useEffect, useState } from "react";
import { fetchArticles } from "../Fetch/api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  // console.log(articles);
  return (
    <div>
      <h2>Articles</h2>
      <section className="ArticleList">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
