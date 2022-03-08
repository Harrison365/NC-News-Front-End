import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle } from "../Fetch/api";

export default function IndividualArticle(props) {
  const params = useParams(); //grabs parameter from end of string

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticle(params.article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  console.log(article);
  return (
    <div>
      <h2>{article.title}</h2>
      by {article.author}, written {article.created_at}
      <br />
      <br />
      Likes❤️ <br /> {article.votes}
      <br />
      <br />
      <p>{article.body}</p>
    </div>
  );
}
