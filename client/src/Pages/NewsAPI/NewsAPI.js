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
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=322f20b1e7084970951e0ea7c7b9db14"
      )
      .then(response => {
        const raw = response.data.articles;
        this.setState({ articles: raw.slice(10) });
        //console.log(this.state.articles)
      });
  }

  render() {
    const { articles } = this.state;
    
    return (
      <div className="news-display">
              <h1 className="news-header">Today's Top News</h1>
        <br />
        {articles.map(article => (
          <div className="articles-div">
          <div className="article-wells">

            <a className="news-title" href={article.url} target="_blank"><p>{article.title}</p></a>
            
            <img
              className="news-img center"
              src={article.urlToImage}
              alt="something here"
            />
            <a className="news-source text-center"><p>News Source: {article.source.name}</p></a>
          </div>
          </div>
        ))}

      </div>
    );
  }
}
export default NewsAPI;
