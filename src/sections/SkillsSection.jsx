import React, { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import "../sections/sectionSkills.css";

const SkillsSection = () => {
  const [keyState, setKeyState] = useState("");
  const [skillInfo, setSkillInfo] = useState({ name: "", description: "", percentage: "" });

  const handleKeyPress = (e) => {
    const skillMapping = {
      '1': { name: 'React.js', description: 'Mit dem React.js-Framework bin ich bestens vertraut und habe bislang all meine Projekte erfolgreich damit umgesetzt. Meine fundierten Kenntnisse ermöglichen es mir, effiziente und dynamische Webanwendungen zu entwickeln.', percentage: '55%' },
      '2': { name: 'React Native', description: 'Mein Ziel ist es, mich im Bereich App-Entwicklung zu spezialisieren, und dafür setze ich gerne auf React Native. Aktuell arbeite ich an zwei verschiedenen Apps, um meine Kenntnisse und Erfahrungen mit React Native weiter zu vertiefen.', percentage: '65%' },
      '3': { name: 'Illustrator & Spline', description: 'Your Illustrator skill description goes here.', percentage: '35%' },
      '4': { name: 'Figma', description: 'Ich setze Figma ein, um meine Projekte sorgfältig zu planen, bevor ich mit der Umsetzung beginne. Die vielseitigen Funktionen von Figma ermöglichen mir eine effiziente Gestaltung, kollaborative Planung und präzise Visualisierung. Dies legt einen soliden Grundstein für den Entwicklungsprozess.', percentage: '40%' },
    };

    if (Object.keys(skillMapping).includes(e.key)) {
      setKeyState(e.key);
      setSkillInfo(skillMapping[e.key]);
    }
  };

  const handleKeyRelease = () => {
    setKeyState("");
    setSkillInfo({ name: "", description: "", percentage: "" });
  };

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, []);

  return (
    <section>
      <div className="container2">
        <p>About</p>
        <h1>My skills</h1>
        <div className="underline"></div>
        
        <div className="d"></div>
        <div className="keyboardSkillContainer" style={{}}>
          <div style={{ width: 600, height: 600 }}>
            <Spline
              scene="https://prod.spline.design/D5cf3E2-Isr8qKMh/scene.splinecode"
            />
          </div>
          
          <div className="skill-card">
            <div className="text-skills">
              {keyState ? (
                <div>
                  <h2>{skillInfo.name}</h2>
                  <p>{skillInfo.description}</p>
                  <div className="skill-bar" style={{ width: skillInfo.percentage }}>
                     ({skillInfo.percentage})
                  </div>
                </div>
              ) : (
                <p>"Press a key to get more information"</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
