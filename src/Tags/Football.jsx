import React from "react";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchFootballArticles } from "../Fetch/api";

export default function Football() {
  const [footballArticles, setFootballArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFootballArticles().then((footArticles) => {
      setFootballArticles(footArticles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading Articles ...</p>;
  return (
    <div>
      <section className="ArticleList">
        <h2>Football Articles</h2>
        {footballArticles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
