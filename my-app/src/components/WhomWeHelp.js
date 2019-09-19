import React from "react";

import Data from "./Data";

const apiUrl = "http://localhost:3001";

class WhomWeHelp extends React.Component {
    state = {
        fund: "fundacje",
        dane: [],
    };

    componentDidMount() {
        this.fetchData(this.state.fund)
    }

    fetchData = (name) => {
        fetch(`${apiUrl}/${name}`)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    dane: data,
                });
                // console.log(data)
            })
            .catch(err => {
                alert('nie wczytano danych');
                // console.error(err);
            })
    }
    handleOnClick = name => event => {
        this.fetchData(name)
    }


    render() {

        return (
            <div id="whomWeHelp">
                <div className="helping">
                    <p>Komu pomagamy?</p>
                    <div className="image"/>
                </div>
                <div className="initiative_div">
                    <ul>
                        <li onClick={this.handleOnClick("fundacje")}><p>Fundacjom</p></li>
                        <li onClick={this.handleOnClick("organizacje")}><p>Organizacjom</p><p>pozarządowym</p></li>
                        <li onClick={this.handleOnClick("zbiorki")}><p>Lokalnym</p><p>zbiórkom</p></li>
                    </ul>
                </div>
                <Data dane={this.state.dane}/>


            </div>
        );
    }
}

export default WhomWeHelp;