import React, { useState, useEffect } from "react";
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

//Navigation
import HorizontalNav from "../compontens/HorizontalNav.jsx";
//CSS files
import "../sections/fundament.css";
import "../sections/sectionHome.css";

//SVG file

import IchSing from '../img/IchSing.svg';


//Component file




const HomeSection = () => {
  

  return (
    <section>
      <div className="container1">
        <HorizontalNav />
        <div className="text-container1">
          <p>HELLO I'M</p>
          <h1>Kerem Türkel</h1>
          <div className="button">
          <Link to='about' smooth={true} duration={1250} ><button className="rounded-button"><p>Learn More ...</p></button></Link>
          </div>
          
        </div>
          
            <img className="image" src={IchSing} alt="" height={650} />
          
          
        <div className="ground"></div>
        
      </div>
    </section>
  );
};

export default HomeSection;
