import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navigation.css"

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        to='/'
                        aria-label='About'
                        className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        to='/Portfolio'
                        aria-label='Portfolio'
                        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'} >
                        My Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        to='/Contact'
                        aria-label='Contact'
                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact Me
                    </Link>
                </li>
                <li>
                    <Link
                        to='/Resume'
                        aria-label='Resume'
                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;