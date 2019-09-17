import React from "react"
import {NavLink} from "react-router-dom";
// import Nav from "./Nav";
import {Link} from "react-scroll";

const options = {
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500
}

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
                            <li><Link to="onlyFourSteps" {...options}>O co chodzi</Link></li>
                            <li><Link to="aboutUs" {...options}>O nas</Link></li>
                            <li><Link to="whomWeHelp" {...options}> Fundacje i organizacje</Link></li>
                            <li><Link to="contact" {...options}> Kontakt</Link></li>
                        </ul>
                    </nav>
                </div>
            </>


        );
    }
}
export default HomeNavigation;