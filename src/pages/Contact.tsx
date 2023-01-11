import "../styling/Contact.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import { BsPersonBadge } from "react-icons/bs";
import { MdMessage, MdOutlineMarkEmailUnread, MdSend } from "react-icons/md";
import { useState } from "react";

// Define ID
const SERVICE_ID = 'service_rxcozvi';
const TEMPLATE_ID = 'template_x9asmo8';
const USER_ID = 'N-Co5OaAcmUr9I2u-';

export function Contact(){
    // Keep track of whether email was sent
    let [sent, setSent] = useState(false);

    // Function to send emails
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
            <Form className="form-container" onSubmit={sendEmail}>
                <div className="ind-form-cont">
                    <label className="form-name"> <BsPersonBadge/> Name: </label>
                    <input required className="form-input" type="text" name="name" />
                </div>
                <div className="ind-form-cont">
                    <label className="form-name"> <MdOutlineMarkEmailUnread/> Email: </label>
                    <input required className="form-input" type="email" name="email" />
                </div>
                <div className="ind-form-cont">
                    <label className="form-name"> <MdMessage/> Message: </label>
                    <textarea className="form-input" name="message" />
                </div>
                <div className="ind-form-cont">
                    <input className="submit" type="submit" value="Submit"/>
                </div>
                
                
            </Form>

        </div>
    );
}