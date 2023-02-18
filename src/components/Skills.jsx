import React, { useState } from 'react';
import progress1 from "../assets/img/meter1.svg"
import progress2 from "../assets/img/meter2.svg"
import progress3 from "../assets/img/meter3.svg"
import Carousel from 'react-elastic-carousel';

function Skills(props) {

    const [breakPoint,setBreakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ])
    return (
        <div className='skills-section'>
            <div className="card text-center container skills"  id='skills'>
                <div className="carosal">
                    <Carousel breakPoints={breakPoint}>
                        <div className="item">
                            <img src={progress1} alt="img" />
                            <h5>Front End</h5>
                        </div>
                        <div className="item">
                            <img src={progress2} alt="img" />
                            <h5>Back End</h5>
                        </div>
                        <div className="item">
                            <img src={progress3} alt="img" />
                            <h5>Full Stack</h5>
                        </div>
                        <div className="item">
                            <img src={progress2} alt="img" />
                            <h5>MS office</h5>
                        </div>
                        <div className="item">
                            <img src={progress3} alt="img" />
                            <h5>Technical Support</h5>
                        </div>
                        <div className="item">
                            <img src={progress1} alt="img" />
                            <h5>Linux Admin</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
        
    )
}

export default Skills;