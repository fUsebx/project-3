import React from "react";
import "./Dashboard.css";
import DashboardLayout from "../../Components/DashboardLayout";
import WeatherAPI from "../WeatherAPI";
import RedditScrape from "../RedditScrape";
import ToDoList from "../ToDoList";
import NewsAPI from "../NewsAPI";
import HistoryAPI from "../HistoryAPI";

const Dashboard = () => (
  <DashboardLayout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <WeatherAPI />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 test-column">
          <ToDoList />
        </div>
        <div className="col-md-6 test-column">
          <RedditScrape />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <NewsAPI />
        </div>
      </div>
      <HistoryAPI />
    </div>
  </DashboardLayout>
);

export default Dashboard;
