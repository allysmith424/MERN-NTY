import axios from "axios";

export default {
  getArticles: function(url) {
    return axios.get(url);
  },
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {
    return axios.post("/api/books", articleData);
  }
};
