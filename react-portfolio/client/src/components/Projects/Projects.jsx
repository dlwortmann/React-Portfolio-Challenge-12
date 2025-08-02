import { Grid2 } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Projects.css"
import WeatherDash from "../../assets/WeatherDashboard.png"
import FitJourney from "../../assets/FitJourney.png"
import CreepyCryptids from "../../assets/CreepyCryptids.png"
import BookSearch from "../../assets/BookSearch.png"

function Project () {
    const projects = [
        {
            id: 0,
            title: "Creepy Cryptids & Haunted Hangouts",
            languages: "TypeScript, React, Apollo",
            packages: "express.js",
            image: CreepyCryptids,
            description: "Final Group Project",
            repo: "https://github.com/VampMina528/Creepy-Cryptids-and-Haunted-Hangouts",
            live: "https://creepy-cryptids-and-haunted-hangouts.onrender.com/",
        },
        {
            id: 1,
            title: "Book Search Engine",
            languages: "Javascript",
            packages: "express.js",
            image: BookSearch,
            description: "Refactored code to allow books to be saved or deleted on a user profile.",
            repo: "https://github.com/dlwortmann/Book-Search-Engine-Challenge",
            live: "https://book-search-engine-challenge-application.onrender.com",
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
            title: "FitJourney",
            languages: "HTML, CSS, JS",
            packages: "express.js",
            image: FitJourney,
            description: "First group project",
            repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
            live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        },
        // {
        //     id: 4,
        //     title: "FitJourney",
        //     languages: "HTML, CSS, JS",
        //     packages: "express.js",
        //     image: FitJourney,
        //     description: "First group project",
        //     repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
        //     live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        // },
        // {
        //     id: 5,
        //     title: "FitJourney",
        //     languages: "HTML, CSS, JS",
        //     packages: "express.js",
        //     image: FitJourney,
        //     description: "First group project",
        //     repo: "https://github.com/dlwortmann/Fit-Journey-Project-1",
        //     live: "https://dlwortmann.github.io/Fit-Journey-Project-1/",
        // },
    ];
    
    return (
        <Grid2 
          container 
          spacing={4} 
          justifyContent="center" 
          sx={{ padding: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}  // define total number of columns per breakpoint
          columnSpacing={3}
          rowSpacing={3}
        >
          {projects.map((project) => (
            <Grid2 key={project.id}>
              <Card sx={{ maxWidth: 345, backgroundColor: "#e8DCB9" }}>
                <CardMedia
                  component="img"
                  alt={project.title}
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
                <CardActions sx={{ justifyContent: "center" }}>
                  <Button 
                    className="pop-on-hover"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    Deployed App
                  </Button>
                  <Button
                    className="pop-on-hover"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    color="primary"
                  >
                    GitHub Repo
                  </Button>
                </CardActions>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      );
    }
    
    export default Project;