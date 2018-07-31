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
        const births = response.data.data.Births;
        const deaths = response.data.data.Deaths;
        const events = response.data.data.Events;
        var randomBirth = births[Math.floor(Math.random() * births.length)];
        var randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
        var randomEvent = events[Math.floor(Math.random() * events.length)];

        this.setState({
          birth: randomBirth,
          death: randomDeath,
          event: randomEvent
        });
      });
  }

  render() {
    console.log(this.state.birth);
    return (
      <div className="history-display">
        <h1 className="history-header">On This Day in History...</h1>
        <br />
        <div className="history-birth">
          <h4>Famous Birth: </h4>{" "}
          <h6>
            {this.state.birth.text} <br /> Year: {this.state.birth.year}
          </h6>
        </div>
        <div className="history-death">
          <h4>Famous Death: </h4>{" "}
          <h6>
            {this.state.death.text} <br /> Year: {this.state.death.year}
          </h6>
        </div>
        <div className="history-event">
          <h4>Famous Event: </h4>{" "}
          <h6>
            {this.state.event.text} <br /> Year: {this.state.event.year}
          </h6>
        </div>
      </div>
    );
  }
}
export default HistoryAPI;
