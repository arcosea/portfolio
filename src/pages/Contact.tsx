import "../styling/Contact.css";
import {Link} from "react-router-dom";
import {useRef, useState} from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


export function Contact(){
    // Define ID
    const SERVICE_ID = 'service_rxcozvi';
    const TEMPLATE_ID = 'template_x9asmo8';
    const USER_ID = 'template_x9asmo8';

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <div className="cont-container">
            <h2 className="cont-header"> Contact Me</h2>
            <Form onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" />
                
                <label>Email</label>
                <input type="email" name="email" />
                
                <label>Message</label>
                <textarea name="message" />
                
                <input type="submit" value="Send" />
            </Form>

        </div>
    );
}