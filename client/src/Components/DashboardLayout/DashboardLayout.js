import React from "react";
import "./DashboardLayout.css";

export default () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="well welcome-banner text-center">
                    <p>Welcome, John. Today is Monday, July 16, 2018 and the current time is 1:23 PM.</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="well dash-div weather">
                    <p>Weather API goes here</p>
                </div>
            </div>
            <div className="col-md-8">
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

