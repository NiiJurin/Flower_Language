import React, { useEffect } from "react";
import "./css/test.css";

interface TextSectionProps {
    text: string;
  }
  
  const TextSection: React.FC<TextSectionProps> = ({ text }) => {
    useEffect(() => {
      const letters = document.querySelectorAll(".text span");
      letters.forEach((span, index) => {
        (span as HTMLElement).style.animationDelay = `${index * 0.1}s`;
      });
    }, []);
  
    return (
      <div className="section">
        <h1 className="text">
          {text.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
    );
  };
  
  const FlowerLanguageHistory: React.FC = () => {
    return (
      <div className="container">
        <TextSection text="Welcome to the future!" />
        <TextSection text="Innovate. Inspire. Create." />
        <TextSection text="Let the ideas flow." />
      </div>
    );
  };
  

export default FlowerLanguageHistory;