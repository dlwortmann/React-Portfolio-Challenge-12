import React, { useState } from "react";
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'

function Header() {
    const [currentPage, setCurrentPage] = useState("/About")

    return (
        <div className="headerParent" style={{ padding: "0px 0px 10px 43px"}}>
            <h1 id="header-text">Danny Wortmann</h1>
            <nav>
            <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}/>
            <Outlet />
            </nav>
       
        </div>
    )
};

export default Header;