import React, {Component} from 'react';
import "./scss/main.scss";
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Home from "./components/Home";
//import Login from "./components/Login";
//import Register from "./components/Register";
//import Error from "./components/Error";
import HomeNavigation from "./components/HomeNavigation";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HomeNavigation/>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/login" component={Home}/>
                        <Route path="/register" component={Home}/>

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
