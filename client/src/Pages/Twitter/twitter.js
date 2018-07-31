import React from "react";
import "../Twitter/Twitter.css"
import ScriptTag from 'react-script-tag';

class Twitter extends React.Component{

    render() {
        return (

        
          <div className="twitter">
            <a class="twitter-timeline" data-width="400" data-height="400" data-theme="dark" href="https://twitter.com/GraphM8?ref_src=twsrc%5Etfw">Tweets by GraphM8</a>
             {/* <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
          
            (<ScriptTag isHydrating={true} async src="https://platform.twitter.com/widgets.js" charset="utf-8" />);

          </div>
        )
    }
}

  export default Twitter;

