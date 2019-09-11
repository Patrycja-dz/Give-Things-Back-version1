import React from "react";

class HomeSecondSection extends React.Component {
    render() {
        return (
            <div className="main-div">
                <div className="first_img"></div>
                <div className="nav-div">
                    <nav>
                        <ul className="nav-links">
                            <li id="start-link">Start</li>
                            <li>O co chodzi</li>
                            <li>O nas</li>
                            <li>Fundacje i organizacje</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>
                </div>
                <div className="heading-div">
                    <p className="first-p"> Zacznij pomagać !</p>
                    <p>Oddaj niechciane rzeczy w zaufane ręce</p>

                <div className="div-for-btn">
                    <div className="first-btn">
                        <p>Oddaj <br/> rzeczy</p>
                    </div>
                    <div className="second-btn">
                        <p>Zorganizuj<br/> zbiórkę</p>
                    </div>
                </div>
                </div>

            </div>

        );
    }
}

export  default HomeSecondSection;