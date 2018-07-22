import React from "react";
import "./WeatherAPI.css";
import axios from "axios";
import { Input} from "../../Components/Form";


class WeatherAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      temp: "",
      description: "", 
      cityChosen: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.searchCityForWeather = this.searchCityForWeather.bind(this);
  }

  searchCityForWeather() {
    axios
      .get("http://api.openweathermap.org/data/2.5/weather", {
        params: {
          q: `${this.state.city}`,
          APPID: "566e57c98908bd4ea7fa97148977fc32",
          units: "imperial"
        }
      })

      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ cityChosen: data.name, temp: data.main.temp, description: data.weather[0].description });
      });
  }

  handleChange(event) {
    let value = event.target.value;
    console.log(value);
    this.setState({ city: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.city) {
      console.log("You must enter something");
    } else if (this.state.city === undefined) {
      console.log("This city doesnt exist");
    } else {
      console.log("sucess");
      this.searchCityForWeather();
      this.setState({city: ""})
    }
  }
  render() {
    return (
      <div className="weather-div">
        <form className="weather-form" onSubmit={this.handleSubmit}>
        <Input className="search-bar" value={this.state.city} name="city" type="text" onChange={this.handleChange} />
        <Input className="search-button" type="submit" value="Submit" placeholder="Search a city!" />
        </form>
        <h3 className="city-chosen">{this.state.cityChosen}</h3>
        <br></br>
        <h5 className="temperature">{this.state.temp}</h5>
        <br></br>
        <h6 className="description">{this.state.description}</h6>
      </div>
    );
  }
}
export default WeatherAPI;
