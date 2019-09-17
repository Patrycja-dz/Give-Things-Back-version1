import React from "react";
import {NavLink} from "react-router-dom";

class Register extends React.Component {
    state = {
        email: "",
        pass: "",
        errors: [],
        error: [],
        newarray: [],
        nextpass: "",

    };
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const errors = [];
        const error = [];
        const newarray = [];
        if (this.state.email.indexOf("@") === -1) {
            errors.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.pass.length <= 6) {
            error.push('Podane hasło jest za krótkie');
        }
        if (this.state.nextpass.length !== (this.state.pass.length)){
            newarray.push('Podane hasła nie zgadzają się')
        }
        this.setState({
            errors: errors,
            error: error,
            newarray: newarray,
        })

    };


    render() {
        return (
            <div>
                <p className="log_in">Załóż konto</p>
                <div className="image_settings"></div>
                <div className="register_content">
                    <div className="register_form" noValidate>
                        <label><span>Email</span></label>
                        <input onChange={this.handleChange} name="email" value={this.state.email} type="email"
                               autoComplete="off"/>
                        <p className="error_p">{this.state.errors.map((err, index) => <p key={index}>{err}</p>)}</p>
                        <label><span>Hasło</span></label>
                        <input onChange={this.handleChange} name="pass" value={this.state.pass}
                               type="password"/>
                        <p className="error_p">{this.state.error.map((err, index) => <p key={index}>{err}</p>)}</p>
                        <label><span>Powtórz hasło</span></label>
                        <input onChange={this.handleChange} name="nextpass" value={this.state.nextpass}
                               type="password"/>
                        <p className="error_p">{this.state.newarray.map((err, index) => <p
                            key={index}>{err}</p>)}</p>
                    </div>
                </div>


                <div className="register_form_btn">
                    <ul className="login_form_div">
                        <button className="send" onClick={this.handleSubmit}>Założ konto</button>
                        <button className="register_btn" ><NavLink to="/register">Zaloguj
                            się</NavLink></button>

                    </ul>
                </div>
            </div>


        );
    }
}


export default Register