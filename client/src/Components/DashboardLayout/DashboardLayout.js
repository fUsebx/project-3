import React from "react";
import "./DashboardLayout.css";
import WeatherAPI from "../../Pages/WeatherAPI"
import NewsAPI from "../../Pages/NewsAPI"



export default () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="well welcome-banner text-center">
                 <h3>wyd?</h3>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="well dash-div weather">
                    <WeatherAPI />
                </div>
            </div>
            <div className="col-md-4">
                <div className="well dash-div news">
                    <NewsAPI />
                </div>
            </div>
            <div className="col-md-4">
                <div className="well dash-div stocks">
                    <p>Stock widget goes here</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <div className="well dash-div facebook-feed">
                    <p>Facebook API goes here</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="well dash-div twitter-feed">
                    <p>Twitter API goes here</p>
                </div>
            </div>
        </div>
    </div>
);

