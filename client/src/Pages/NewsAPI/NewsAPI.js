import React from "react";
import axios from "axios";
import "./NewsAPI.css"

class NewsAPI extends React.Component {


  componentWillMount() {
    axios
      .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
        params: {
          api_key: "fa3a438079fb45a58ec76fb1ba54b7e4", 
          sort: "newest"
        }
      })

      .then(response => {
        const { data } = response;
        console.log(data);
        
      });
  }

  render() {
    return (
      <div className="test" >
        <p>Hello</p>
      </div>
    );
  }
}
export default NewsAPI
