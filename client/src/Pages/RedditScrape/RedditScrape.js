import React from "react";
import "./RedditScrape.css";
import axios from 'axios'


class RedditScrape extends React.Component {
  constructor() {
    super();
    this.state = {
      title: [],
      url: [],
      thumnail: []
    };
  }

  componentDidMount() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://www.reddit.com/top/.json")

      .then(response => {
        const results  = response.data.data.children;
        for (var i = 0; i < 10; i++){
          
          let title = results[i].data.title; 
          let url = results[i].data.url; 
          let thumnail = results[i].data.thumnail
          this.setState(title, url, thumnail)
        }
      });
  }

  render() {
    return <div className="test" />;
  }
}
export default RedditScrape;
