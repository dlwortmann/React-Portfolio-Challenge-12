import React, { useState } from "react";
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Resume from '../Resume/Resume';
import { Outlet } from 'react-router-dom'

export function Header() {
    const [currentPage, setCurrentPage] = useState("/About")

    return (
        <div>
            <nav className=''>
                <span>Danny Wortmann</span>
            </nav>
            <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}/>
            <Outlet />
            
        </div>
    )
};

export default Header;