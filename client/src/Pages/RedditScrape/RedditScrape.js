import React from "react";
import "./RedditScrape.css";
import axios from "axios";

class RedditScrape extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount() { 
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.reddit.com/top/.json"
      )
      .then(response => {
        // This is the full array
        // Each data object, is accessed by the data property on that object
        const raw = response.data.data.children.slice(15);
        this.setState({ articles: raw });
        //console.log("Reddit data:", raw);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="reddit-display">
        <h1 className="reddit-header">Top 10 Reddit Threads...NOW</h1>
        <br />
        {articles.map(article => (
          <div className="reddit-divs">
            <div className="row">
            <div className="col-centered reddit-title">
            <a className="reddit-article-title" href={article.data.url} target="_blank"><p className="reddit-article-title">{article.data.title}</p></a>{" "}
            
            </div>
            </div>

            <div className="row">
            <div className="col-centered reddit-img">
            <img
                      className="reddit-thumbnail"
                      src={article.data.thumbnail}
                      alt="reddit pic here"
                    />
            </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RedditScrape;
