import React from "react";
import {Link} from "react-router-dom";

class OnlyFourSteps extends React.Component {
    render() {
        return (
            <div id='onlyFourSteps'>
                <p className="only_four_steps">Wystarczą 4 proste kroki</p>
                <div className="image"></div>
                <div className="only_four_divs">
                    <div className="columns_div">
                        <div className="div_for_p">
                        <div className="img_div"></div>
                            <p>Wybierz rzeczy</p>
                            <p>ubrania,zabawki<br/>sprzęt i inne</p>
                        </div>
                        <div className="div_for_p">
                        <div className="next_img_div"></div>
                            <p>Spakuj je</p>
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="div_for_p">
                            <div className="other_img_div"></div>
                            <p>Zdecyduj komu <br/>chcesz pomóc</p>
                            <p>wybierz zaufane miejsce</p>
                        </div>
                        <div className="div_for_p">
                            <div className="last_img"></div>
                            <p>Zamów kuriera</p>
                            <p>kurier przyjedzie w dogodnym terminie </p>
                        </div>
                    </div>

                </div>
                <Link to="/login">
                    <div className="div_for_things">
                    <button className="give_things_back">Oddaj <br/>rzeczy</button>
                    </div>
                </Link>
            </div>


        );
    }
}

export  default OnlyFourSteps;