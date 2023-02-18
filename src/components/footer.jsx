import React from 'react';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='container parent-sub'>
                <div className="subscribe row">
                    <h2 className='col-md-6 col-sm-12'>Subscribe to our Newsletter & Never miss latest updates</h2>
                    <div className="subscribe-email col-md-6 col-sm-12 row align-items-center">
                        <input type="email" placeholder='Email Address' className='col-8 email-input'/>
                        <input type="button" value="SEND" className='col-4 send-btn'/>
                    </div>
                </div>
            </div>
            <div className="container d-flex align-items-center justify-content-between">
                <div className="left">
                    <a className="navbar-brand fs-1 fw-bold text-white" href="/">ELMALLAH</a>
                </div>
                <div className="right d-flex">
                    <a className="nav-link rounded-circle circle bg-dark text-center d-flex justify-content-center align-items-center mx-2" href="https://wa.me/1555522657"><i className="fab fa-whatsapp text-white"></i></a>
                    <a className="nav-link rounded-circle circle bg-dark text-center d-flex justify-content-center align-items-center mx-2" href="/projects"><i className="fab fa-linkedin-in text-white"></i></a>
                    <a className="nav-link rounded-circle circle bg-dark text-center d-flex justify-content-center align-items-center" href="/projects"><i className="fab fa-github text-white"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;