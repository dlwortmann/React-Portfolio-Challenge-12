import React from 'react';
import Project from '../Projects/Projects.jsx'


function Portfolio() {
    return (
        <div style={{paddingLeft: "75px", paddingRight: "75px"}}>
        <h2 style={{justifyContent: "center", display:"flex", border: "5px", color: "#16262E",}}>My Portfolio</h2>
        <Project />
        </div>
    )
};

export default Portfolio;