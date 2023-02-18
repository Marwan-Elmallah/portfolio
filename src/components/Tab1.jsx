import React from 'react';
import img1 from "../assets/img/project-img1.png"
import img2 from "../assets/img/project-img2.png"
import img3 from "../assets/img/project-img3.png"

function Tab1(props) {
    return (
        <div className='row py-5'>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Front End Developer</span>
                    <img src={img1} alt="img" />
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Back End Developer</span>
                    <img src={img2} alt="img" />
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Front End Developer</span>
                    <img src={img3} alt="img" /> 
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Front End Developer</span>
                    <img src={img3} alt="img" /> 
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Back End Developer</span>
                    <img src={img1} alt="img" /> 
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="tabImg">
                    <span>Back End Developer</span>
                    <img src={img2} alt="img" /> 
                </div>
            </div>
        </div>
    );
}

export default Tab1;