import axios from "axios";

const url = "https://nc-news-back-end-zg12.onrender.com";

//Fetching article lists
export const fetchArticles = (topic, sortBy, order) => {
  return axios
    .get(`${url}/api/articles`, {
      params: {
        topic: topic,
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
    return res.data.article;
  });
};

//Vote incrementor
export const patchVote = (article_id, vote) => {
  return axios
    .patch(`${url}/api/articles/${article_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data.article;
    });
};

//Fetch comments for given article
export const fetchComments = (article_id) => {
  return axios.get(`${url}/api/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

//Post comment
export const postComment = (article_id, requestObject) => {
  return axios
    .post(`${url}/api/articles/${article_id}/comments`, requestObject)
    .then((res) => {
      return res.data.comments;
    });
};

//Delete Comment
export const deleteComment = (comment_id) => {
  return axios.delete(`${url}/api/comments/${comment_id}`).then((res) => {
    return res.data.comments;
  });
};
