import React from "react";
import "./Dashboard.css";
import DashboardLayout from "../../Components/DashboardLayout";
import WeatherAPI from "../WeatherAPI";
import RedditScrape from "../RedditScrape";
import ToDoList from "../ToDoList";
import NewsAPI from "../NewsAPI";
import HistoryAPI from "../HistoryAPI";
// import YoutubeAPI from '../YoutubeAPI'; 

const Dashboard = () => (
  <DashboardLayout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 test-column">
          <WeatherAPI />
        </div>
        <div className="col-md-6 test-column">
        <HistoryAPI />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 test-column">
          <ToDoList />
        </div>
        <div className="col-md-6 test-column">
        {/* <YoutubeAPI /> */}
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 test-column">
          <NewsAPI />
        </div>
        <div className="col-md-6 test-column">
        <RedditScrape />
        </div>
      </div>
     </div>
  </DashboardLayout>
);

export default Dashboard;
