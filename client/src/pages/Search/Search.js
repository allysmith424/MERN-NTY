import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchCard from "../../components/SearchCard";
import { ResultsCard, ResultItem } from "../../components/Results";
import API from "../../utils/API";


class Search extends Component {
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    title: "",
    date: "",
    href: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
    [name]: value
    });
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  };

  handleSearch = () => {
    this.setState({ articles: [] });
    const topic = this.state.topic;
    const startDate = `${this.state.startDate}0101`;
    const endDate = `${this.state.endDate}1212`;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&begin_date=${startDate}&end_date=${endDate}&api-key=2a4f99f383e44584aec8fefc4ac09156`

  API.getArticles(url)
    .then(result => {
      console.log(result.data.response.docs);;
      this.setState({ articles: result.data.response.docs, topic: "", startDate: "", endDate: ""});
    })
    .catch(err => console.log(err));
  };

  handleSaveArticle = id => {
    API.saveArticle({ title: this.state.topic, date: this.state.date, href: this.state.href })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchCard
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
        />
        <ResultsCard>
          {this.state.articles.map(article => (
            <ResultItem
              title={article.headline.main}
              date={article.ub_date}
              href={article.web_url}
            />
          ))}
        </ResultsCard>
      </div>
    );
  };

};

export default Search;
