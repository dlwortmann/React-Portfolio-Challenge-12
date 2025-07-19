import React, { useState } from "react";
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'
import Footer from "../Footer/Footer";
import "./Header.css"

function Header() {
    const [currentPage, setCurrentPage] = useState("/About")

    return (
        <div className="headerParent">
            <h1>Danny Wortmann</h1>
            <h2>Junior Web Developer</h2>
            <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}/>
            <Outlet />
    
       
        </div>
    )
};

export default Header;