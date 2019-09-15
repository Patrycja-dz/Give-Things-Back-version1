import React from "react";

class HomeThreeColumns extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="columns_div">
                <div className="column">
                    <p className="uppercase_letters " id="number">10</p>
                    <p className="uppercase_letters">oddanych worków</p>
                    <p last_p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, earum est eveniet
                        mollitia quas quia sint?</p>
                </div>
                <div className="column">
                    <p className="uppercase_letters " id="number">5</p>
                    <p className="uppercase_letters">wspartych organizacji</p>
                    <p className="last_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, earum est eveniet
                        mollitia quas quia sint? </p>

                </div>
                <div className="column">
                    <p className="uppercase_letters " id="number">7</p>
                    <p className="uppercase_letters">zorganizowanych zbiórek</p>
                    <p className="last_p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid assumenda, earum est eveniet
                        mollitia quas quia sint? </p>
                </div>
                </div>
            </div>
        )
    }
}

export default HomeThreeColumns