import React, { useState } from "react";
import "../sections/sectionSkills.css";

const Accordion = ({ name, description, percentage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`skill-card ${isOpen ? "open" : ""}`} onClick={toggleAccordion}>
      <div className="text-skills">
        <div>
          <h2>{name}</h2>
          {isOpen && (
            <>
              <p>{description}</p>
              <div className="skillBar-container">
                    <div className="skill-bar" style={{ width: `${percentage}%` }}>
                      {percentage}%
                    </div>
                    <div className="fullBar" style={{ width: `${100 - percentage}%` }}>
                    </div>
                  </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion