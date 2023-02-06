import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
           <li><NavLink to='/gallery'>Gallery</NavLink></li>
           <li><NavLink to='/gallery'>About</NavLink></li>
           <li><NavLink to='/gallery'>News</NavLink></li>
           <li><NavLink to='/gallery'>Contact</NavLink></li>
        </ul>
    );
};

export default NavBar;