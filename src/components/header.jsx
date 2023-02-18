import { useState } from "react"

function Header(props) {
    
    const [activate1,setActivate1] = useState("active")
    const [activate2,setActivate2] = useState("")
    const [activate3,setActivate3] = useState("")
    
    
    return (
        <nav className="navbar navbar-expand-lg navi" id="nav">
            <div className="container">
                <a className="navbar-brand fs-1 fw-bold text-white" href="/">ELMALLAH</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="nav nav-pills d-flex justify-content-end w-100 align-items-center">
                        <li className="nav-item fw-bold mx-3">
                            <a className={"nav-link fs-5 text-light" + activate1} href="#home" onClick={(e) => {
                                setActivate1("active")
                                setActivate2("")
                                setActivate3("")
                            }}>Home</a>
                        </li>
                        <li className="nav-item fw-bold mx-3">
                            <a className={"nav-link fs-5 text-light" + activate2} href="#skills" onClick={(e) => {
                                setActivate1("")
                                setActivate2("active")
                                setActivate3("")
                            }}>Skills</a>
                        </li>
                        <li className="nav-item fw-bold mx-3">
                            <a className={"nav-link fs-5 text-light" + activate3} href="#projects" onClick={(e) => {
                                setActivate1("")
                                setActivate2("")
                                setActivate3("active")
                            }}>Projects</a>
                        </li>
                        <li className="nav-item fw-bold mx-3 d-flex">
                            <a className="nav-link rounded-circle circle bg-dark d-flex justify-content-center align-content-center" href="https://wa.me/1555522657"><i className="fab fa-whatsapp text-white"></i></a>
                            <a className="nav-link rounded-circle circle bg-dark d-flex justify-content-center align-content-center" href="https://www.linkedin.com/in/marwan-elmallah-958093184/"><i className="fab fa-linkedin-in text-white"></i></a>
                            <a className="nav-link rounded-circle circle bg-dark d-flex justify-content-center align-content-center" href="https://github.com/Marwan-Elmallah"><i className="fab fa-github text-white"></i></a>
                        </li>
                        <li className="nav-item fw-bold mx-3">
                            <button className='p-3 nav-connect'>
                                <a className="fw-bold" href="#contact">Let's Connect</a></button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;