import React from 'react';
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

const Nav = () => (
    <div className="nav-div">
    <nav>
        <ul className="nav-links">
            <li id="start-link"><NavLink to="/">Start</NavLink></li>
            <li><Link to="about">O co chodzi</Link></li>
            <li>O nas</li>
            <li> Fundacje i organizacje</li>
            <li> Kontakt</li>
        </ul>
    </nav>
    </div>
)

export default Nav;