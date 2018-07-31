// import React from "react";
// import "./Soundcloud.css";
// import axios from "axios";
// import { Input } from "../../Components/Form";
// import { FormBtn } from "../../Components/Form";

// class Soundcloud extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       city: "",
//       temp: "",
//       description: "", 
//       cityChosen: "",
//       weatherIcon: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.searchCityForWeather = this.searchCityForWeather.bind(this);
//   }

//   searchCityForWeather() {
//     axios
//       .get("https://api.openweathermap.org/data/2.5/weather", {
//         params: {
//           q: `${this.state.city}`,
//           APPID: "566e57c98908bd4ea7fa97148977fc32",
//           units: "imperial"
//         }
//       })

//       .then(response => {
//         const { data } = response;
//         console.log(data);
//         this.setState({ cityChosen: data.name, temp: data.main.temp, description: data.weather[0].description, weatherIcon: data.weather[0].id });
//       });
//   }

//   handleChange(event) {
//     let value = event.target.value;
//     console.log(value);
//     this.setState({ city: value });

//     // let weatherId = data.data.weather[0].id;
//     // if(weatherId <= 232) {
//     //      this.setState({ weatherIcon: ThunderStormIcon })
//     // } else if(weatherId >= 300 && weatherId <= 531) {
//     //      this.setState({ weatherIcon: RainIcon });
//     // } else if(weatherId >= 600 && weatherId <= 622 ) {
//     //      this.setState({ weatherIcon: SnowIcon });
//     // } else if(weatherId === 800) {
//     //      this.setState({ weatherIcon: ClearIcon });
//     // } else if(weatherId >= 801 && weatherId <= 804) {
//     //      this.setState({ weatherIcon: CloudsIcon });
//     // }

//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     if (!this.state.city) {
//       console.log("You must enter something");
//     } else if (this.state.city === undefined) {
//       console.log("This city doesnt exist");
//     } else {
//       console.log("sucess");
//       this.searchCityForWeather();
//       this.setState({city: ""})
//     }
//   }
//   render() {
//     return (
//       <div className="weather-div">
//       <h1 className="text-center weather-header">Check the Weather for Today</h1>
//         <form className="weather-form" onSubmit={this.handleSubmit}>
//         <Input className="search-bar" value={this.state.city} name="city" type="text" onChange={this.handleChange} placeholder="  Search a city!" />
//         <FormBtn className="search-button-weather" type="submit" value="Submit">Submit</FormBtn>
//         </form>
//         <h4 className="city-chosen">{this.state.cityChosen}</h4>
//         <br></br>
//         <h5 className="temperature">{this.state.temp}</h5>
//         <br></br>
//         <p className="description">{this.state.description}</p>
//         <br></br>
//         <p className="weather-icon">{this.state.weatherIcon}</p>
//       </div>
//     );
//   }
// }

// export default Soundcloud;
