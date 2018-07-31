import React, { Component } from "react";
import "./YoutubeAPI.css";
import axios from "axios";


class YoutubeAPI extends Component {
    constructor() {
        super();
        this.state = {
            myVideo: ""
        }
    }

    componentDidMount() {
        axios
            .get(
                "https://www.googleapis.com/youtube/v3/videos?part=player&chart=mostPopular&maxResults=1&key=AIzaSyD7mjB5QnITYixjrhvAncj_QzX6m4Rgxpk"
            )
            .then(response => {
                const raw = response.data.items
                //console.log(raw)
                const fries = raw.map(function (element, index, array) {
                    let videoSrc = element.player.embedHtml.split("src=")
                    let videoSrc2 = videoSrc[1].split("frameborder")
                    let final = videoSrc2[0].replace('"', '')
                    let final2 = final.split('"')[0]
                    //console.log(final2)
                    return final2
                })
                this.setState({
                    myVideo: fries
                })
            }) 
            .catch(err => console.log(err))
    }

    render() {
        
        //const { myVideos } = this.state;
        return (
            <div className="video-display">
                <h1 className="video-header">Today's most popular video on Youtube!</h1>
                <br />
          <div className="video-div">
            <iframe className="border-btm" width="100%" height="100%" title="Youtube Video" src={this.state.myVideo} frameBorder="0"> </iframe>
          </div>
    
            </div>
        );
    }
}
export default YoutubeAPI;
