import React from "react";

class Contact extends React.Component {
    state = {
        name: "",
        email: "",
        message: "",
        errors1: [],
        errors2: [],
        errors3: [],
    };
    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        const errors1 = [];
        const errors2 = [];
        const errors3 = [];
        if (this.state.name === null || this.state.name.length <= 5) {
            errors1.push("Podane imię jest nieprawidłowe!")
        }
        if (this.state.email.indexOf("@") === -1 || this.state.email.indexOf(".") === -1) {
            errors2.push('Podany email jest nieprawidłowy!')
        }
        if (this.state.message.length < 120) {
            errors3.push('Wiadomość musi mieć conajmniej 120 znaków!')

        }
        this.setState({
            errors1: errors1,
            errors2: errors2,
            errors3: errors3
        })
        if(!errors1.length && !errors2.length && !errors3.length){
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name:this.state.name,
                    email:this.state.email,
                    message:this.state.message
                })
            }).then(()=>this.props.history.push('/'))
        }

    }

    render() {
        return (
            <div id="contact">
                <div className="contact_wrapper">
                    <div className="form_background"></div>
                    <div className="contact_with_us">
                        <p id="contact_with">Skontaktuj się z nami</p>
                        <div id="decoration"></div>

                        <div className="input_form" noValidate>
                            <label>
                                <span>Wpisz swoje imię</span>
                                <input onChange={this.handleOnChange} name="text" value={this.state.name} type="text"
                                       placeholder="Krzysztof" autoComplete="off"/>
                                <p className="errors1">{this.state.errors1.map((err, index) => <p
                                    key={index}>{err}</p>)}</p>
                            </label>
                            <label>
                                <span>Wpisz swój email</span>
                                <input onChange={this.handleOnChange} name="email" value={this.state.email} type="email"
                                       placeholder="abc@xyz.pl" autoComplete="off"/>
                                <p className="errors1">{this.state.errors2.map((err, index) => <p
                                    key={index}>{err}</p>)}</p>
                            </label>
                        </div>

                        <label id="messages">
                            <span>Wpisz swoją wiadomość</span>
                            <textarea onChange={this.handleOnChange} cols="40" rows="7" id="message " name="message"
                                       value={this.state.message}>
                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget consectetur ipsum, sit amet tristique ligula. Mauris sollicitudin placerat lacinia. Ut vitae pulvinar ante. Aliquam sodales, nulla vitae malesuada tincidunt, urna lorem ultricies enim, in dapibus eros dui eu "

                        </textarea>
                            <p className="errors1">{this.state.errors3.map((err, index) => <p
                                key={index}>{err}</p>)}</p>
                        </label>
                        <div className="send_message_btn">
                            <input onClick={this.handleSubmit} type="submit" value="Wyślij" id="send_message"/>
                        </div>


                    </div>
                </div>
                <p id="rights">Copyright by Coders Lab</p>
                <div className="social_media">
                    <div className="first_social"></div>
                    <div className="second_social"></div>

                </div>
            </div>


        );
    }
}

export  default Contact;