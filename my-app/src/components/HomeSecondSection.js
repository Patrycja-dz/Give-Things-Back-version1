import React from "react";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";

class HomeSecondSection extends React.Component {
    render() {
        return (
            <div className="main-div">
                <div className="content">
                <div className="heading-div">
                    <p className="first-p"> Zacznij pomagać !</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>

                    <div className="div-for-btn">
                        <NavLink to="/register">
                            <div className="first-btn">
                                <button>Oddaj <br/> rzeczy</button>
                            </div>
                        </NavLink>
                        <NavLink to="/register">
                            <div className="second-btn">
                                <button>Zorganizuj<br/> zbiórkę</button>

                            </div>
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default HomeSecondSection;