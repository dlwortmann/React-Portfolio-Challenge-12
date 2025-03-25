import { Grid2 } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Projects.css"
import WeatherDash from "../../assets/weatherdashboard.png"
import FitJourney from "../../assets/FitJourney.png"

function Project () {
    const projects = [
        {
            id: 0,
            title: "FitJourney",
            languages: "HTML, CSS, JS",
            packages: "express.js",
            image: FitJourney,
            description: "First group project",
            repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
            live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        },
        {
            id: 1,
            title: "WeatherDashboard",
            languages: "Javascript",
            packages: "express.js",
            image: WeatherDash,
            description: "App that gets weather data",
            repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
            live: "https://weather-dashboard-challenge-09-1.onrender.com/",
        },
        {
            id: 2,
            title: "WeatherDashboard",
            languages: "Javascript",
            packages: "express.js",
            image: WeatherDash,
            description: "App that gets weather data",
            repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
            live: "https://weather-dashboard-challenge-09-1.onrender.com/",
        },
        {
            id: 3,
            title: "WeatherDashboard",
            languages: "Javascript",
            packages: "express.js",
            image: WeatherDash,
            description: "App that gets weather data",
            repo: "https://github.com/dlwortmann/Weather-Dashboard-Challenge-09",
            live: "https://weather-dashboard-challenge-09-1.onrender.com/",
        },
        {
            id: 4,
            title: "FitJourney",
            languages: "HTML, CSS, JS",
            packages: "express.js",
            image: FitJourney,
            description: "First group project",
            repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
            live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        },
        {
            id: 5,
            title: "FitJourney",
            languages: "HTML, CSS, JS",
            packages: "express.js",
            image: FitJourney,
            description: "First group project",
            repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
            live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        },
    ];
    
    return (
        <Grid2 size={{ xs: 4 }} style={{ display: "flex", justifyContent: "center"}}>
            {projects.map(project => (
            <Card key={project.id} sx={{ maxWidth: 345 }} style= {{ backgroundColor: "floralwhite" }}>
                <CardMedia
                component= "img"
                alt="projects displayed with active links"
                height="140"
                image={project.image} 
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions style={{ justifyContent: "center"}}>
                    <Button
                    id="project-button"
                    className="pop-on-hover"
                    href={project.live}
                    size="small">
                        Deployed App
                    </Button>
                    <Button
                    id="project-button"
                    className="pop-on-hover"
                    href={project.repo}
                    size="small">
                        GitHub Repo
                    </Button>
                </CardActions>
            </Card>
            ))}
        </Grid2>    
    
    )
}

export default Project;