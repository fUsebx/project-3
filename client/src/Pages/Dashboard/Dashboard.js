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
        <div className="col-md-6">
          <WeatherAPI />
        </div>
        <div className="col-md-6">
        <HistoryAPI />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 test-column">
          <ToDoList />
        </div>
        <div className="col-md-6 test-column">
        <HistoryAPI />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <NewsAPI />
        </div>
        <div className="col-md-6">
        <RedditScrape />
        </div>
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> 7fa9e1bc15ecbb7a2715ce67a77cc5b100054d6a
    </div>
  </DashboardLayout>
);

export default Dashboard;
