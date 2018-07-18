var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="assets/Welcom.jpeg" />
                    <p className="legend">all your apps on one page</p>
                </div>
                <div>
                    <img src="assets/explosion.jpeg" />
                    <p className="legend">your life is about to get even more awesome</p>
                </div>
                <div>
                    <img src="assets/IG.jpeg" />
                    <p className="legend">Instagram login</p>
                </div>
                <div>
                    <img src="assets/Twit.jpeg" />
                    <p className="legend">Twitter login</p>
                </div>
                <div>
                    <img src="assets/Weather.jpeg" />
                    <p className="legend">Location login</p>
                </div>
            </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
