import React, { useState } from 'react';
import{BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';


const Projects = () => {

    const [activate1,setActivate1] = useState(" activated-tab")
    const [activate2,setActivate2] = useState("")
    const [activate3,setActivate3] = useState("")
    
    return (
        <BrowserRouter>
            <div  id='projects' className='projects'>
                <div className="container py-5">
                    <h1 className="project-title text-white">Projects</h1>
                    <p className="project-text">This Portofolio is Created Using React and Most Needed Library , Hope my Resume Finds you well :D</p>
                    <div className="tabs d-flex justify-content-center">
                        <Link className={"tab1 tab" + activate1} to="/portfolio/tab1" onClick={(e) => {
                                setActivate1(" activated-tab")
                                setActivate2("")
                                setActivate3("")
                            }}>Pages</Link>
                        <Link className={"tab2 tab" + activate2} to="/portfolio/tab2" onClick={(e) => {
                                setActivate1("")
                                setActivate2(" activated-tab")
                                setActivate3("")
                            }}>Tasks</Link>
                        <Link className={"tab3 tab" + activate3} to="/portfolio/tab3" onClick={(e) => {
                                setActivate1("")
                                setActivate2("")
                                setActivate3(" activated-tab")
                            }}>Brief</Link>
                    </div>
                    <Routes>
                        <Route path='/portfolio' element={<Tab1/>}/>
                        <Route path='/portfolio/tab1' element={<Tab1/>}/>
                        <Route path='/portfolio/tab2' element={<Tab2/>}/>
                        <Route path='/portfolio/tab3' element={<Tab3/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Projects;