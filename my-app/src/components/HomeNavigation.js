import React from "react"
import {NavLink} from "react-router-dom";

class HomeNavigation extends React.Component{
    render() {
        return(
         <div>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/login">Zaloguj</NavLink>
             <NavLink to="/register">Załóż konto</NavLink>
         </div>
        );
    }
}
export default HomeNavigation;