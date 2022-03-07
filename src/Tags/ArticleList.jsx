import React, { useEffect, useState } from "react";
import { fetchArticles } from "../Fetch/api";
import ArticleCard from "./ArticleCard";
// import TopicSelector from "./TopicSelector";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  // const [topicFilter, setTopicFilter] = useState("All");

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);
  // console.log(articles);
  return (
    <div>
      <section className="ArticleList">
        <h2>All Articles</h2>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
