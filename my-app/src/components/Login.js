import React from "react";
import {NavLink} from "react-router-dom";

class Login extends React.Component {
    state = {
        email: "",
        password1: "",
        errors: [],
        error:[],

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const errors = [];
        const error=[];
        if (this.state.email.indexOf("@") === -1) {
            errors.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.password1.length <= 6) {
            error.push('Podane hasło jest za krótkie');
        }
        this.setState({
            errors: errors,
            error:error,
        })

    };

    render() {

        return (
            <div>
                <p className="log_in">Zaloguj się</p>
                <div className="image"></div>
                <div className="form_content">
                    <div className="login_form" noValidate>
                        <label><span>Email</span></label>
                        <input onChange={this.handleChange} name="email" value={this.state.email} type="email"
                               autoComplete="off"/>
                        <p className="error_p">{this.state.errors.map((err,index)=><p key={index}>{err}</p> )}</p>
                        <label className="password"><span>Hasło</span></label>
                        <input onChange={this.handleChange} name="password1" value={this.state.password1}
                               type="password"/>
                        <p className="error_p">{this.state.error.map((err,index)=><p key={index}>{err}</p> )}</p>
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