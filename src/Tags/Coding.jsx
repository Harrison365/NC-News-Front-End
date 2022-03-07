import React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchCodingArticles } from "../Fetch/api";

export default function Coding() {
  const [codingArticles, setCodingArticles] = useState([]);

  useEffect(() => {
    fetchCodingArticles().then((codeArticles) => {
      setCodingArticles(codeArticles);
    });
  }, []);

  return (
    <div>
      <section className="ArticleList">
        <h2>All Articles</h2>
        {codingArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
