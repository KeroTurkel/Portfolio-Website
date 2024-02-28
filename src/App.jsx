import React, {useState, useEffect} from 'react';
import './App.css'
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';

//Sections
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectSection from './sections/ProjectSection';

//Navigation
import HorizontalNav from './compontens/HorizontalNav';
import WelcomeSection from './sections/WelcomeSection';

function App() {
    return (
      <div className="content">
        <div className="content-inner">
              <Element name="home">
                <HomeSection />
              </Element>
              <Element name="about">
                <AboutSection />
              </Element>
              <Element name="skills">
                <SkillsSection />
              </Element>
              <Element name="project">
                <ProjectSection />
              </Element>
           
        </div>
      </div>
    );
  }

export default App;
