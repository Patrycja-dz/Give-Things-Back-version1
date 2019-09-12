import React from "react"
import {NavLink} from "react-router-dom";
import Nav from "./Nav";

class HomeNavigation extends React.Component {
    render() {
        return (
            <>
                <div className="firstHeader">

                    <NavLink id="routeLinks" className="regist" to="/register"> Załóż konto </NavLink>
                    <NavLink id="routeLinks" className="login" to="/login">Zaloguj </NavLink>

                </div>
                <Nav/>
            </>

        );
    }
}
export default HomeNavigation;