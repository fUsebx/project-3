import React from "react";
import "./Dashboard.css";
import DashboardLayout from "../../Components/DashboardLayout";
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

export default Dashboard;
