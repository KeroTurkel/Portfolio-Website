import React, { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import "../sections/sectionSkills.css";
import "../sections/fundament.css";
import Accordion from '../compontens/Accordion.jsx';

const SkillsSection = () => {
  const [keyState, setKeyState] = useState("");
  const [skillInfo, setSkillInfo] = useState({ name: "", description: "", percentage: "" });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 1024);

  const skillMapping = {
    '1': { name: 'React.js', description: 'Mit dem React.js-Framework bin ich bestens vertraut und habe bislang all meine Projekte erfolgreich damit umgesetzt. Meine fundierten Kenntnisse ermöglichen es mir, effiziente und dynamische Webanwendungen zu entwickeln.', percentage: 55 },
    '2': { name: 'React Native', description: 'Mein Ziel ist es, mich im Bereich App-Entwicklung zu spezialisieren, und dafür setze ich gerne auf React Native. Aktuell arbeite ich an zwei verschiedenen Apps, um meine Kenntnisse und Erfahrungen mit React Native weiter zu vertiefen.', percentage: 65 },
    '3': { name: 'Illustrator & Spline', description: 'Ich optimiere meine Projekte mit Illustrator für präzise Bildbearbeitung und Spline für die Erstellung beeindruckender 3D-Modelle. Durch diese Kombination schaffe ich eine überzeugende visuelle Darstellung meiner kreativen Arbeiten.', percentage: 35 },
    '4': { name: 'Figma', description: 'Ich setze Figma ein, um meine Projekte sorgfältig zu planen, bevor ich mit der Umsetzung beginne. Die vielseitigen Funktionen von Figma ermöglichen mir eine effiziente Gestaltung, kollaborative Planung und präzise Visualisierung. Dies legt einen soliden Grundstein für den Entwicklungsprozess.', percentage: 40 },
  };

  const handleKeyPress = (e) => {
    const skillMapping = {
      '1': { name: 'React.js', description: 'Mit dem React.js-Framework bin ich bestens vertraut und habe bislang all meine Projekte erfolgreich damit umgesetzt. Meine fundierten Kenntnisse ermöglichen es mir, effiziente und dynamische Webanwendungen zu entwickeln.', percentage: 55 },
      '2': { name: 'React Native', description: 'Mein Ziel ist es, mich im Bereich App-Entwicklung zu spezialisieren, und dafür setze ich gerne auf React Native. Aktuell arbeite ich an zwei verschiedenen Apps, um meine Kenntnisse und Erfahrungen mit React Native weiter zu vertiefen.', percentage: 65 },
      '3': { name: 'Illustrator & Spline', description: 'Ich optimiere meine Projekte mit Illustrator für präzise Bildbearbeitung und Spline für die Erstellung beeindruckender 3D-Modelle. Durch diese Kombination schaffe ich eine überzeugende visuelle Darstellung meiner kreativen Arbeiten.', percentage: 35 },
      '4': { name: 'Figma', description: 'Ich setze Figma ein, um meine Projekte sorgfältig zu planen, bevor ich mit der Umsetzung beginne. Die vielseitigen Funktionen von Figma ermöglichen mir eine effiziente Gestaltung, kollaborative Planung und präzise Visualisierung. Dies legt einen soliden Grundstein für den Entwicklungsprozess.', percentage: 40 },
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024)
    };

    window.addEventListener('keypress', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);
    window.addEventListener('resize', handleResize);

    // Initialisierung für den Fall, dass die Komponente während eines kleinen Bildschirms geladen wird
    handleResize();

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <div className="container2">
        <p>About</p>
        <h1>My skills</h1>
        <div className="underline"></div>
        
        <div className="d"></div>
        <div className="keyboardSkillContainer">
          {(!isMobile && !isTablet) && (
            <div style={{ width: 600, height: 600 }}>
              <Spline
                scene="https://prod.spline.design/D5cf3E2-Isr8qKMh/scene.splinecode"
              />
            </div>
          )}
          {(!isMobile && !isTablet) &&(
          <div className="skill-card">
            <div className="text-skills">
              {keyState ? (
                <div>
                  <h2>{skillInfo.name}</h2>
                  <p>{skillInfo.description}</p>
                  <div className="skillBar-container">
                    <div className="skill-bar" style={{ width: `${skillInfo.percentage}%` }}>
                      {skillInfo.percentage}%
                    </div>
                    <div className="fullBar" style={{ width: `${100 - skillInfo.percentage}%` }}>
                    </div>
                  </div>

                </div>
              ) : (
                <p style={{marginTop: 0}}>"Press a key to get more information"</p>
              )}
            </div>
          </div>
          )}

          {(isMobile) && (
            <div className="accordion-container">
              {[1, 2, 3, 4].map((key) => (
                
                <Accordion
                  key={key}
                  name={skillMapping[key].name}
                  description={skillMapping[key].description}
                  percentage={skillMapping[key].percentage}
                />
              ))}
            </div>
          )}

          {(!isMobile && isTablet) && (
              <div className="accordion-container">
                {[1, 2, 3, 4].map((key) => (
                  <div key={key} className="skill-card">
                    <h2>{skillMapping[key].name}</h2>
                    <p>{skillMapping[key].description}</p>
                    <div className="skillBar-container">
                      <div className="skill-bar" style={{ width: `${skillMapping[key].percentage}%` }}>
                        {skillMapping[key].percentage}%
                      </div>
                      <div className="fullBar" style={{ width: `${100 - skillMapping[key].percentage}%` }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
