import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCard from "../../components/SearchCard";
import ResultsCard from "../../components/ResultsCard";
import API from "../../utils/API";


class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    title: "",
    date: "",
    author: "",
    href: ""
  };

  loadArticles = () => {
  API.getArticles()
    .then(res =>
      this.setState({ articles: res.data, topic: "", startDate: "", endDate: "" })
    )
    .catch(err => console.log(err));
  };

  handleSearch = () => {
    this.loadArticles();
  };

  handleSaveArticle = id => {
    API.saveArticle({ title: this.state.topic, date: this.state.date, author: this.state.author, href: this.state.href })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchCard />
        <ResultsCard />
      </div>
    );
  };

};

export default Search;
