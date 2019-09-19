import React from "react";

class Contact extends React.Component {
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
                            <input name="text" type="text" placeholder="Krzysztof"/>
                        </label>
                        <label>
                            <span>Wpisz swój email</span>
                            <input name="email" type="email" placeholder="abc@xyz.pl"/>
                        </label>
                    </div>

                    <label id="messages">
                        <span>Wpisz swoją wiadomość</span>
                        <textarea cols="40" rows="7" id="message"
                                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget consectetur ipsum, sit amet tristique ligula. Mauris sollicitudin placerat lacinia. Ut vitae pulvinar ante. Aliquam sodales, nulla vitae malesuada tincidunt, urna lorem ultricies enim, in dapibus eros dui eu tellus.">

                        </textarea>

                    </label>
                    <div className="send_message_btn">
                        <input type="submit" value="Wyślij" id="send_message"/>
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