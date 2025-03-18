import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <ul className=''>
            <li className=''>
                <Link
                    to='/About'
                    className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className=''>
                <Link
                    to='/Portfolio'
                    className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'} >
                    My Portfolio
                </Link>
            </li>
            <li className=''>
                <Link
                    to='/Contact'
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Me
                </Link>
            </li>
            <li className=''>
                <Link
                    to='/Resume'
                    className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    )
};

export default Navigation;