import React, { useState, useEffect } from "react";

const TypingEffect = () => {
  const strings = [
    "Frontend Developer.",
    "Cybersecurity Enthusiast.",
    "Web Developer.",
    "Lifelong Learner.",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentString = strings[index];
      if (!isDeleting) {
        setCurrentText((prev) => currentString.substring(0, prev.length + 1));
        if (currentText === currentString) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      } else {
        setCurrentText((prev) => currentString.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index]);

  return (
    <div className="flex flex-col items-center justify-center">
      
      <p className="text-2xl font-bold">{currentText}|</p>
    </div>
  );
};

export default TypingEffect;
