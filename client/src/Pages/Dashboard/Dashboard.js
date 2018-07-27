import React from "react";
import "./Dashboard.css";
import DashboardLayout from "../../Components/DashboardLayout";
<<<<<<< HEAD
import WeatherAPI from "../WeatherAPI";
// import RedditScrape from '../RedditScrape';
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
            {/* <RedditScrape /> */}
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
=======
import WeatherAPI from '../WeatherAPI'; 
import RedditScrape from '../RedditScrape'; 
import ToDoList from '../ToDoList'; 
// import NewsAPI from '../NewsAPI'; 

const Dashboard = (props) => (
            <DashboardLayout>
                <WeatherAPI />
                <br />
                <ToDoList />
                <RedditScrape />
                {/* <NewsAPI /> */}
            </DashboardLayout>
            
        );
>>>>>>> 9deb7a27f66981686a70f2751af2faa94b633a61

export default Dashboard;
