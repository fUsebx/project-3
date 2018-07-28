import React, { Component } from "react";
import "./NewsAPI.css";
import axios from "axios";

class NewsAPI extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=7941c058b4d14a3cbe7fedf92e45c6f0"
      )
      .then(response => {
        const raw = response.data.articles;
        this.setState({ articles: raw.slice(5) });
      });
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div className="news-display">
              <h1 className="news-header">Today's Top News</h1>
        <br />
        {articles.map(article => (
          <div className="articles-div">
          <div className="article-wells">
           
            <a className="news-title" href={article.url} target="_blank">{article.title}</a>
            <h2 className="news-source">News Source: {article.source.name}</h2>
            <img
              className="news-img"
              src={article.urlToImage}
              alt="something here"
            />
          </div>
          </div>
        ))}

      </div>
    );
  }
}
export default NewsAPI;
