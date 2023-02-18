import mainImg from "../assets/img/header-img.svg"
import TypeIt from "typeit-react";

const Home = (props) => {
    return (
        <div className='banner-container' id='home'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6 col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text welc"style={{ width: "20rem" }}>Welcome to my Portfolio</p>
                                <h1 className="card-title my-4 hi">Hi, I'm Marwan Elmallah<p className="fs-3 lh-lg">
                                <TypeIt
                                    getBeforeInit={(instance) => {
                                        instance.type("Front End Developer").pause(1000).delete(19).pause(300).type("Back End Developer").pause(750).delete(19).pause(300).type("Full Stack Developer :D");
                                        return instance;
                                    }}
                                    options= {{
                                        speed : 250,
                                        loop: true
                                    }}
                                />
                                </p></h1>
                                <p className='card-text notes my-3'>Fresh Graduated With Good Knowledge ,Experience And Skills, I Would Like To Join a Company As Software Engineer ,Which Can Launch My Skills And Creativity To Make The Best Benefits Of My Skills ,Knowledge And Qualification To Add A Big Value To My organization.</p>
                                <p className='list-group-item connect'>
                                    let's Connect<i className="far fa-arrow-alt-circle-right fw-lighter px-3"></i>   
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 img-fly d-flex justify-content-end">
                        <img src={mainImg} alt="main" className='mainImg' id="mainImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;