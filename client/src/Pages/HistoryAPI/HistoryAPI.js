import React, { Component } from "react";
import "./HistoryAPI.css";
import axios from "axios";

class HistoryAPI extends Component {
  constructor() {
    super();
    this.state = {
      birth: [],
      death: [],
      event: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://history.muffinlabs.com/date/2/14"
      )
      .then(response => {
        const births = response.data.data.Births
        const deaths = response.data.data.Deaths
        const events = response.data.data.Events
        var randomBirth = births[Math.floor(Math.random() * births.length)]; 
        var randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
        var randomEvent = events[Math.floor(Math.random() * events.length)]
        
        this.setState({
            birth: randomBirth, 
            death: randomDeath, 
            event: randomEvent
        })
        
      });
  }

  render() {
    console.log(this.state.birth)
    return (
      <div className="news-display">
              <h1 className="news-header">Today In History</h1>
        <br />
          <div className="articles-div">
            <h4>Famous Birth In History - </h4> <h6>{this.state.birth.text} / Year: {this.state.birth.year}</h6>
          </div>
          <div className="articles-div">
            <h4>Famous Death In History - </h4> <h6>{this.state.death.text} / Year: {this.state.death.year}</h6>
          </div>
          <div className="articles-div">
            <h4>Famous Event In History - </h4> <h6>{this.state.event.text} / Year: {this.state.event.year}</h6>
          </div>
      </div>
    );
  }
}
export default HistoryAPI;
