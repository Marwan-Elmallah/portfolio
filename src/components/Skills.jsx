import React, { useState } from 'react';
import progress1 from "../assets/img/meter1.svg"
import progress2 from "../assets/img/meter2.svg"
import progress3 from "../assets/img/meter3.svg"
import Carousel from 'react-elastic-carousel';
// function Skills(props) {
//     return (
//         <div className='skills-section'>
//             <div className="card text-center container skills"  id='skills'>
//                 <h1 className="card-title skills-title">Skills</h1>
//                 <p className="card-text skills-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text.</p>
//                 <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false">
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <div className="card-body">
//                             <div className="card-footer text-muted d-flex justify-content-around row">
//                                 <div className="col">
//                                     <img src={progress1} alt="meter1"/>
//                                     <h5 className='my-4'>Front End</h5>
//                                 </div>
//                                 <div className="col">
//                                     <img src={progress2} alt="meter2"/>
//                                     <h5 className='my-4'>Back End</h5>
//                                 </div>
//                                 <div className="col">
//                                     <img src={progress3} alt="meter3"/>
//                                     <h5 className='my-4'>Full Stack</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                     <div className="card-body">
//                         <div className="card-footer text-muted d-flex justify-content-around row">
//                                 <div className="col">
//                                     <img src={progress3} alt="meter1"/>
//                                     <h5 className='my-4'>Network Admin</h5>
//                                 </div>
//                                 <div className="col">
//                                     <img src={progress1} alt="meter2"/>
//                                     <h5 className='my-4'>Help Desk</h5>
//                                 </div>
//                                 <div className="col">
//                                     <img src={progress2} alt="meter3"/>
//                                     <h5 className='my-4'>Linux Admin</h5>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Previous</span>
//                 </button>
//                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true" />
//                     <span className="visually-hidden">Next</span>
//                 </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Skills;



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
                <h1 className="card-title skills-title">Skills</h1>
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
                            <h5>MS</h5>
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