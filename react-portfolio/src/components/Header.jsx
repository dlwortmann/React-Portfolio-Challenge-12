import React, { useState } from "react";
import Navigation from './Navigation';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { Outlet } from 'react-router-dom'

export function Header() {
    const [currentPage, setCurrentPage] = useState("About")
    // const renderPage = () => {
    //     switch(currentPage) {
    //         case "About":
    //             return <About />;
    //         case "Portfolio":
    //             return <Portfolio />;
    //         case "Contact":
    //             return <Contact />;
    //         case "Resume":
    //             return <Resume />;
    //         default: 
    //             return <About />;                
    //     }
    // };
    return (
        <div>
            <nav className=''>
                <span>Danny Wortmann</span>
            </nav>
            <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}/>
            {/* <Outlet />
            <main>
                {renderPage(currentPage)}
            </main> */}
        </div>
    )
};

export default Header;