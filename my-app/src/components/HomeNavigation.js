import React from "react"
import {NavLink} from "react-router-dom";
// import Nav from "./Nav";
import {Link} from "react-scroll";

class HomeNavigation extends React.Component {
    render() {
        return (
            <>
                <div className="firstHeader">

                    <NavLink id="routeLinks" className="regist" to="/register"> Załóż konto </NavLink>
                    <NavLink id="routeLinks" className="login" to="/login">Zaloguj </NavLink>

                </div>
                <div className="nav-div">
                    <nav>
                        <ul className="nav-links">
                            <li id="start-link"><NavLink id="special-link" to="/">Start</NavLink></li>
                            <li><Link to="onlyFourSteps">O co chodzi</Link></li>
                            <li><Link to="aboutUs">O nas</Link></li>
                            <li><Link to="whomWeHelp"> Fundacje i organizacje</Link></li>
                            <li><Link to="contact"> Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
            </>


        );
    }
}
export default HomeNavigation;