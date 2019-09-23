import React from "react";
import {NavLink} from "react-router-dom";

class Register extends React.Component {
    state = {
        email: "",
        password1: "",
         errors: [],
        error: [],
        err: [],
        password2: "",

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
        const err = [];
        if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
            errors.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.password1.length <= 6) {
            error.push('Podane hasło jest za krótkie');
        }

        if (this.state.password2.length !== (this.state.password1.length)){

            err.push('Podane hasła nie zgadzają się')
        }
        this.setState({
            errors: errors,
            error: error,
            err: err,
        })

         if (!errors.length && !error.length && !err.length) {
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password1: this.state.password1
                })
            }).then(() => this.props.history.push('/'))
        }

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
                        <input onChange={this.handleChange} name="password1" value={this.state.password1}
                               type="password"/>
                        <p className="error_p">{this.state.error.map((err, index) => <p key={index}>{err}</p>)}</p>
                        <label><span>Powtórz hasło</span></label>
                        <input onChange={this.handleChange} name="password2" value={this.state.password2}
                               type="password"/>
                        <p className="error_p">{this.state.err.map((err, index) => <p
                            key={index}>{err}</p>)}</p>
                    </div>
                </div>


                <div className="register_form_btn">
                    <ul className="login_form_div">
                        <button className="send" onClick={this.handleSubmit}>Założ konto</button>

                        <button className="register_btn" ><NavLink className="register_link" to="/register"><p>Zaloguj
                            się</p></NavLink></button>


                    </ul>
                </div>
            </div>


        );
    }
}


export default Register