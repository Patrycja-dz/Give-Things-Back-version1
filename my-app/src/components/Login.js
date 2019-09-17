import React from "react";
import {NavLink} from "react-router-dom";

class Login extends React.Component {
    state = {
        email: "",
        pass: "",
        errors: [],

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const errors = [];
        if (this.state.email.indexOf("@") === -1) {
            errors.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.pass.length <= 6) {
            errors.push('Podane hasło jest za krótkie');
        }
        this.setState({
            errors: errors,
        })

    };

    render() {
        const erorrsMessages = (
            <div className="error_div">
                {this.state.errors.map((err, index) => <p key={index}>{err}</p>)}
            </div>
        );
        return (
            <div>
                <p className="log_in">Zaloguj się</p>
                <div className="image"></div>
                <div className="form_content">
                    <div className="login_form" noValidate>
                        {erorrsMessages}
                        <label><span>Email</span></label>
                        <input onChange={this.handleChange} name="email" value={this.state.email} type="email"
                               autoComplete="off"/>
                        <label className="password"><span>Hasło</span></label>
                        <input onChange={this.handleChange} name="pass" value={this.state.pass}
                               type="password"/>

                    </div>


                </div>


                <div className="login_form_btn">
                    <ul className="login_form_div">
                        <button className="submit">Założ konto</button>
                        <button className="log_btn" onClick={this.handleSubmit}><NavLink to="/register">Zaloguj
                            się</NavLink></button>

                    </ul>
                </div>
            </div>


        );
    }
}

export  default Login