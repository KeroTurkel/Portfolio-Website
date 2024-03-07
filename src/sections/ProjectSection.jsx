import React from "react";
import { Button } from "react-scroll";
import Spline from '@splinetool/react-spline';
import website from "../img/SplineWeb.png";

//CSS file
import "../sections/sectionProject.css";

const ProjectSection = () => {

    return(
        <section>
        
                    <div className="container2">
                        <p>About</p>
                        <h1>My Projects</h1>
                        <div className="underline"></div>
                        
                            <div className="card-container">
                                <div className="project-card1">
                                    <div className="spline-container">
                                    <Spline scene="https://prod.spline.design/Qoxr0-X1eREzOANC/scene.splinecode" className="project-img"  />
                                    </div>
                                    <h3 style={{textAlign: "left"}}>Webshop</h3>
                                    <div className="button-container" style={{justifyContent: "left"}}>
                                        <div className="button1">
                                            <a href="https://youtu.be/j0XM0ilOFp4">Video</a>
                                        </div>
                                        <div className="button2">
                                            <a href="https://webshop-with-react-1.vercel.app">Website</a>
                                        </div>
                                        
                                </div>
                                    
                                </div>
                                <div className="project-card1">
                            
                                    <div className="spline-container">
                                        <Spline scene="https://prod.spline.design/Wubf3hLjXvpRdXUb/scene.splinecode" />
                                    </div>
                                    <h3 style={{textAlign: "center"}}>Crypto-Simulator</h3>
                                    <div className="button-container" style={{justifyContent: "center"}}>

                                        <div className="button1">
                                            <a href="https://youtu.be/-MrCYxARQrU">Video</a>
                                        </div>
                                        <div className="button2">
                                            <a href="https://github.com/KeroTurkel/Crypto-Simulator.git">GitHub</a>
                                        </div>
                                    </div>
                                
                                </div>
                                    <div className="project-card1">
                                        <div className="spline-container">
                                            <Spline scene="https://prod.spline.design/fJO5rnbClLbYczku/scene.splinecode" className="project-img" />
                                        </div>
                                        <h3 style={{ textAlign: "right" }}>SIG-App</h3>
                                        <div className="button-container" style={{ justifyContent: "right" }}>
                                            <div className="button1">
                                                <a href="https://youtu.be/kxnZXdg4LAc">Video</a>
                                            </div>
                                            <div className="button2">
                                                <a href="https://github.com/KeroTurkel/SIG-App.git">GitHub</a>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        
                    </div>
        </section>
        
    )
}

export default ProjectSection;