import React from "react";
import "../sections/fundament.css";
import "../sections/sectionAbout.css";

//Image
import OtobusBak from "../img/OtobusBak.svg";

const AboutSection = () => {
  return (
    <section>
      <div className="container2">
        <p>More</p>
        <h1>About me</h1>
        <div className="underline"></div>

        <div className="inner-container">
          
          <div className="profile-img">
            <img className="profile-img" src={OtobusBak} alt="OtobusBak" height={400} />
          </div>

          <div className="text-container">
            <div className="card_container">
              <div className="card">
                <h2>Education</h2>
                <div className="card-text">
                  <p>Bezirksschule</p>
                  <p>Informatikmittelschule</p>
                </div>
              </div>

              <div className="card">
                <h2>Interested in</h2>
                <div className="card-text">
                  <p>Web Development</p>
                  <p>Mobile Development</p>
                </div>
              </div>
            </div>
            <div className="text-field">
              <p>
                Informatikmittelschul-Schüler (IMS) mit Leidenschaft für Technologie,
                spezialisiert auf App- und Webentwicklung. Durch eigenständiges Lernen
                erweitere ich stetig mein Wissen und bleibe am Puls neuester Technologien.
                Mein Ziel: Wertvolle Erfahrungen in App und Webentwicklung sammeln und
                innovative Lösungen gestalten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;