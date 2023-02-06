import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.scss"

const NavBar = () => {
    return (
        <>
        <ul className="main-nav">
           <li className="main-nav__item"><NavLink to='/gallery' className="main-nav__link">Gallery</NavLink></li>
           <li className="main-nav__item"><NavLink to='/gallery' className="main-nav__link">About</NavLink></li>
           <li className="main-nav__item"><NavLink to='/gallery' className="main-nav__link">News</NavLink></li>
           <li className="main-nav__item"><NavLink to='/gallery' className="main-nav__link">Contact</NavLink></li>
        </ul>
        </>
    )
}

export default NavBar