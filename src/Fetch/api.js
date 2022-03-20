import axios from "axios";

const url = "https://nc-news-example-seminar-3-11.herokuapp.com";

export const fetchArticles = (sortBy) => {
  return axios
    .get(`${url}/api/articles`, {
      params: {
        sort_by: sortBy,
      },
    })
    .then((res) => {
      console.log(res.data.articles);
      return res.data.articles;
    });
};

//Could make these cleaner using use state and one function with `template literal`

export const fetchArticlesByTopic = (topic, sortBy, order) => {
  return axios
    .get(`${url}/api/articles?topic=${topic}`, {
      params: {
        sort_by: sortBy,
        order: order,
      },
    })
    .then((res) => {
      return res.data.articles;
    });
};

//Fetching individual article
export const fetchArticle = (article_id) => {
  return axios.get(`${url}/api/articles/${article_id}`).then((res) => {
    // console.log(res.data.article);
    return res.data.article;
  });
};

/////Vote incrementor/////
export const patchVote = (article_id, vote) => {
  return axios
    .patch(`${url}/api/articles/${article_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data.article;
    });
};

//Fetch comments for given article///

export const fetchComments = (article_id) => {
  return axios.get(`${url}/api/articles/${article_id}/comments`).then((res) => {
    console.log(res.data.comments);
    return res.data.comments;
  });
};

//Post comment////

export const postComment = (article_id, requestObject) => {
  return axios
    .post(`${url}/api/articles/${article_id}/comments`, requestObject)
    .then((res) => {
      return res.data.comments;
    });
};

/// Delete Comment ///

export const deleteComment = (comment_id) => {
  return axios.delete(`${url}/api/comments/${comment_id}`).then((res) => {
    return res.data.comments;
  });
};
