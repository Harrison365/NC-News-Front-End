import React, { useEffect, useState } from "react";
import { fetchArticles } from "../Fetch/api";
import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";
import Order from "./Order";
import { useParams } from "react-router-dom";
// import TopicSelector from "./TopicSelector";

export default function Articles({ sortBy, setSortBy, order, setOrder }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticles(topic, sortBy, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch(
        ({
          response: {
            data: { msg },
            status,
          },
        }) => {
          setError({ msg, status });
          setIsLoading(false);
        }
      );
  }, [topic, sortBy, order]);

  if (isLoading) return <p>Loading Articles ...</p>;
  if (error)
    return (
      <h2>
        {error.status}:{error.msg}
      </h2>
    );
  if (articles.length <= 0)
    return (
      <div>
        <div id="orderSortContainer">
          Sort Articles By:
          <SortBy sortBy={sortBy} setSortBy={setSortBy} />
          Order:
          <Order order={order} setOrder={setOrder} />
        </div>
        <section className="ArticleList">
          <h2 id="sub-title">
            {topic
              ? topic.charAt(0).toUpperCase() + topic.slice(1) + " "
              : "All "}
            Articles
          </h2>
          <h3>Sorry. There Are No Articles For This Topic.</h3>
        </section>
      </div>
    );
  return (
    <div>
      <div id="orderSortContainer">
        Sort Articles By:
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        Order:
        <Order order={order} setOrder={setOrder} />
      </div>
      <section className="ArticleList">
        <h2 id="sub-title">
          {topic
            ? topic.charAt(0).toUpperCase() + topic.slice(1) + " "
            : "All "}
          Articles
        </h2>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
