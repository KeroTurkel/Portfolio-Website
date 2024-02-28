import React, { useEffect, useState } from "react";
import "../sections/sectionWelcome.css";

const WelcomeSection = ({ onRemove }) => {
    const [slideUp, setSlideUp] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setSlideUp(true);
        const removeTimer = setTimeout(() => {
          onRemove();
        }, 1000);
        return () => clearTimeout(removeTimer);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, [onRemove]);
  
    return (
      <section
        className={`welcome-section ${slideUp ? "slide-up" : ""}`}
        onAnimationEnd={() => {
          if (slideUp) {
            onRemove();
          }
        }}
      >
        <div className="content-name">
          <h1>
            <span>I</span>M<span>Kerem Türkel</span>
          </h1>
        </div>
      </section>
    );
    
}

export default WelcomeSection;