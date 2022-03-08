import axios from "axios";

const url = "https://nc-news-example-seminar-3-11.herokuapp.com";

export const fetchArticles = () => {
  // if (topicFilter === "All") {
  return axios.get(`${url}/api/articles`).then((res) => {
    return res.data.articles;
  });
  // } else {
  //   return axios.get(`${url}/api/articles?topic=${topicFilter}`).then((res) => {
  //     return res.data.articles;
  //   });
  // }
};

//Could make these cleaner using use state and one function with `template literal`

export const fetchFootballArticles = () => {
  return axios.get(`${url}/api/articles?topic=football`).then((res) => {
    return res.data.articles;
  });
};
export const fetchCodingArticles = () => {
  return axios.get(`${url}/api/articles?topic=coding`).then((res) => {
    return res.data.articles;
  });
};
export const fetchCookingArticles = () => {
  return axios.get(`${url}/api/articles?topic=cooking`).then((res) => {
    return res.data.articles;
  });
};
