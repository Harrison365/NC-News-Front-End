import React, { useEffect, useState } from "react";
import { fetchArticles } from "../Fetch/api";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import Order from "./Order";
// import TopicSelector from "./TopicSelector";

export default function Articles({ sortBy, setSortBy, order, setOrder }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [topicFilter, setTopicFilter] = useState("All");

  useEffect(() => {
    fetchArticles(sortBy, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [sortBy, order]);

  if (isLoading) return <p>Loading Articles ...</p>;
  return (
    <div>
      Sort Articles By:
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      Order:
      <Order order={order} setOrder={setOrder} />
      <section className="ArticleList">
        <h2>All Articles</h2>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}