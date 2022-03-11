import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { fetchArticlesByTopic } from "../Fetch/api";
import { useParams } from "react-router-dom";
import SortBy from "./SortBy";
import Order from "./Order";

export default function ArticleTopics({ sortBy, setSortBy, order, setOrder }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    fetchArticlesByTopic(topic, sortBy, order).then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, sortBy, order]);
  if (isLoading) return <p>Loading Articles ...</p>;
  return (
    <div>
      Sort Articles By:
      <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      Order:
      <Order order={order} setOrder={setOrder} />
      <section className="ArticleList">
        <h2>{topic} Articles</h2>
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </section>
    </div>
  );
}
