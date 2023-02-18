import React from 'react';
import contactImg from "../assets/img/contact-img.svg"
function Contact(props) {


    return (
        <div className='contact' id='contact'>
            <div className="container py-5">
                <div className="row d-flex align-items-center">
                    <div className="contact-img col-md-6">
                        <img src={contactImg} alt="contact" id="contactImg"/>
                    </div>
                    <div className="contact-form col-md-6 text-white">
                        <form action="" className='contact-form row'>
                            <h1 className='py-2 col-12'>Contact Me..</h1>
                            <input type="text" name="firstname" id="firstname" placeholder='First Name' className='col-md-6 col-sm-12'/>
                            <input type="text" name="lastname" id="lastname" placeholder='Last Name' className='col-md-6 col-sm-12'/>
                            <input type="email" name="email" id="email" placeholder='Email Address'className='col-md-6 col-sm-12'/>
                            <input type="mobile" name="phone" id="phone" placeholder='Phone Number'className='col-md-6 col-sm-12'/>
                            <textarea name="message" id="message" cols="20" rows="10" className='col-12' placeholder='Message'></textarea>
                        </form>
                        <button className='m-3 py-3 px-5 contact-form-btn' onClick={(e)=> e.currentTarget.childNodes[0].innerHTML = "Sending..."}>
                            <span className='fw-bolder'>SEND</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;