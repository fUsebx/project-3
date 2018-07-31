// import React, { Component } from "react";
// import "./YoutubeAPI.css";
// import axios from "axios";


// class YoutubeAPI extends Component {
//     constructor() {
//         super();
//         this.state = {
//             myVideos: []
//         }
//     }

//     componentDidMount() {

//         let videoArray = []


//         axios
//             .get(
//                 "https://www.googleapis.com/youtube/v3/videos?part=player&chart=mostPopular&maxResults=3&key=AIzaSyD7mjB5QnITYixjrhvAncj_QzX6m4Rgxpk"
//             )
//             .then(response => {
//                 const raw = response.data.items
//                 //console.log(raw)
//                 raw.forEach(function (element, index, array) {
//                     let videoSrc = element.player.embedHtml.split("src=")
//                     let videoSrc2 = videoSrc[1].split("frameborder")
//                     let final = videoSrc2[0].replace('"', '')
//                     let final2 = final.split('"')[0]
//                     videoArray.push(final2)
//                 })
//             })
//             .then(
//                 this.setState({
//                     myVideos: videoArray
//                 })

//             )
//             .catch(err => console.log(err))
//     }

//     render() {
//         //console.log(this.state.myVideos)
//         const { myVideos } = this.state;
//         return (
//             <div className="news-display">
//                 <h1 className="news-header">Today's most popular on Youtube</h1>
//                 <br />
//                 {myVideos.forEach(video => (
//           <div className="articles-div">
//             <p>You are here </p>
//             <iframe width="400" height="250" title="Youtube Video" src={video} frameBorder="0"> </iframe>
//           </div>
//         ))}

//               {/* {
//                   this.state.myVideos.forEach(res => (
                     
                
//                         <iframe width="400" height="250" title="Youtube Video" src={res} frameBorder="0"> </iframe>
                     

//                      //<iframe width="400" height="250" title="Youtube Video" src={this.state.myVideos[0]} frameBorder="0"> </iframe>
                    
//                   ))
//               { */}
    
//             </div>
//         );
//     }
// }
// export default YoutubeAPI;
