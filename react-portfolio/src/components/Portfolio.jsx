import React from 'react';
import Project from './Project.jsx'

const projects = [
    {
        id: 0,
        title: "FitJourney",
        languages: "HTML, CSS, JS",
        packages: "express.js",
        image: "../images/FitJourney.png",
        description: "First group project",
        repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
        live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
    },
    {
        id: 1,
        title: "WeatherDashboard",
        languages: "Javascript",
        packages: "express.js",
        image: "../images/weatherdashboard.png",
        description: "App that gets weather data",
        repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
        live: "https://weather-dashboard-challenge-09-1.onrender.com/",
    },
    {
        id: 2,
        title: "WeatherDashboard",
        languages: "Javascript",
        packages: "express.js",
        image: "../images/weatherdashboard.png",
        description: "App that gets weather data",
        repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
        live: "https://weather-dashboard-challenge-09-1.onrender.com/",
    },
    {
        id: 3,
        title: "WeatherDashboard",
        languages: "Javascript",
        packages: "express.js",
        image: "../images/weatherdashboard.png",
        description: "App that gets weather data",
        repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
        live: "https://weather-dashboard-challenge-09-1.onrender.com/",
    },
    {
        id: 4,
        title: "FitJourney",
        languages: "HTML, CSS, JS",
        packages: "express.js",
        image: "../images/FitJourney.png",
        description: "First group project",
        repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
        live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
    },
    {
        id: 5,
        title: "FitJourney",
        languages: "HTML, CSS, JS",
        packages: "express.js",
        image: "../images/FitJourney.png",
        description: "First group project",
        repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
        live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
    },
];

function Portfolio() {
    return (
        <div>
        <p className=''>My Portfolio</p>
        <hr />
        <Project projects={projects} />
        </div>
    )
};

export default Portfolio;