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

componentDidMount(){
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=7941c058b4d14a3cbe7fedf92e45c6f0"
    )
    .then(response => {
      const raw = response.data.articles; 
      this.setState({articles: raw.slice(5)})
      
    })
}

  render() {
    const {articles} = this.state
    console.log(articles)
    return (
<div className="test-div">

      {articles.map(article => (
      <div>
  <h1 className="news-title">Title:{article.title}</h1>
  <h2 className="news-source">News Source: {article.source.name}</h2>
  <img className="news-img" src={article.urlToImage} alt="something here"/>
        </div>
       ) )}
</div>
    );
  }

}
export default NewsAPI;
