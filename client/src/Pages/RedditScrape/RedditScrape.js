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
        const raw = response.data.data.children.slice(20);
        this.setState({ articles: raw });


        console.log("Reddit data:", raw);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="test">

        {articles.map(article => (
          <div>
            <img className="reddit-thumbnail" src={article.data.thumbnail} alt="reddit pic here"/>
            <h1 className="reddit-title">{article.data.title}</h1>{" "}
            <h2 className="reddit-url">{article.data.url}</h2>
          </div>
        ))}
      </div>
    );
  }
}
export default RedditScrape;
