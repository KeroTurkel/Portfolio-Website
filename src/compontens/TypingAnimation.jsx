import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the typing speed as needed

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return <>{displayedText}</>;
};

export default TypingAnimation;
