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
      <div className="reddit-display">
        <h1 className="reddit-header">Top 5 Reddit Threads...NOW</h1>
        <br />
        {articles.map(article => (
          <div className="reddit-div">
            <div className="reddit-threads">
              <div className="row">
                <div className="col">
                  <div className="thumbnail-div">
                    <img
                      className="reddit-thumbnail"
                      src={article.data.thumbnail}
                      alt="reddit pic here"
                    />
                  </div>
                </div>

                <div className="col">
                  <div className="reddit-title-div">
                    <h1 className="reddit-title">{article.data.title}</h1>{" "}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="reddit-url-div">
                    <a className="reddit-url" href={article.data.url} target="_blank">Check out the thread!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default RedditScrape;
