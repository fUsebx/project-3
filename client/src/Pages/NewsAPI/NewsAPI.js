import React, { Component } from "react";
import "./NewsAPI.css";
import getNews from './getNews'
 
class NewsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allArticles: []
    };

    this.setNewsState = this.setNewsState.bind(this); 
  }

componentDidMount(){
  this.setNewsState(); 
}

setNewsState(){
  getNews()
    .then(articles => this.setState({allArticles: articles}))
    .catch(err => console.log(err))
}

  render() {
    return (
<div className="test-div"></div>
    );
  }

}
export default NewsAPI;
