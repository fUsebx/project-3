import React from "react";
import "./Dashboard.css";
import DashboardLayout from "../../Components/DashboardLayout";
import WeatherAPI from "../WeatherAPI";
import RedditScrape from '../RedditScrape';
import ToDoList from "../ToDoList";
// import NewsAPI from '../NewsAPI';

const Dashboard = props => (
  <DashboardLayout>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <WeatherAPI />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <ToDoList />
        </div>
        <div className="col-md-6">
            <RedditScrape />
        </div>
      </div>
      <br />
      <div className="row">
      <div className="col-md-4">
      {/* <NewsAPI /> */}
      </div>
      </div>
    </div>
  </DashboardLayout>
);

export default Dashboard;
