import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticle, patchVote } from "../Fetch/api";
import Heart from "react-animated-heart";

export default function IndividualArticle(props) {
  const params = useParams(); //grabs parameter from end of string

  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClick, setClick] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetchArticle(params.article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
      setLikes(article.votes);
    });
  }, []);

  //   console.log(article);
  return (
    <div>
      <h2>{article.title}</h2>
      by {article.author}, written {article.created_at}
      <br />
      <br />
      Likes {likes}:
      <button
        onClick={() => {
          if (!isClick) {
            setLikes((likes) => {
              return (likes += 1);
            });
            patchVote(params.article_id, 1);
            setClick(true);
          } else {
            setLikes((likes) => {
              return (likes -= 1);
            });
            patchVote(params.article_id, -1);
            setClick(false);
          }
        }}
      >
        ❤️
      </button>
      <br />
      <br />
      <p>{article.body}</p>
    </div>
  );
}
