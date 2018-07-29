
import React from "react";
import "./Home.css";

//const Home = () => (
class Vid extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: "https://player.vimeo.com/video/88010511?autoplay=1&loop=1?muted=1"
        };
    }

    render () {
        return (
        <div className="container-fluid">
            <div className="product-holder">
                    <iframe margin="0" padding="0" background="transparent" id="background-video" src={this.state.videoURL} title="Home video" frameBorder="0"/>
                <img className="img img-responsive" src={require("../../assets/welcome_copy.png")} alt=""/>
            </div>
        </div>
        )
    }
  }
  //)
export default Vid;
