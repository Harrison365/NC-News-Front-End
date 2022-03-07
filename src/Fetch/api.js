import axios from "axios";

export const fetchArticles = () => {
  const url = "https://nc-news-example-seminar-3-11.herokuapp.com";
  return axios.get(`${url}/api/articles`).then((res) => {
    return res.data.articles;
  });
};
