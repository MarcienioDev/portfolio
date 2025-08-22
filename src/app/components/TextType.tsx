"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface TextTypeProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  initialDelay?: number;
  className?: string;
  reverseMode?: boolean;
  variableSpeed?: boolean;
  onSentenceComplete?: (sentence: string, index: number) => void;
}

export default function TextType({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  loop = true,
  initialDelay = 0,
  className = "",
  reverseMode = false,
  variableSpeed = false,
  onSentenceComplete,
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Gera velocidade variável
  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const variation = typingSpeed * 0.5; // ±50%
    return Math.max(
      50,
      Math.floor(typingSpeed + (Math.random() - 0.5) * variation * 2)
    );
  }, [variableSpeed, typingSpeed]);

  // Intersection Observer para animação só quando visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Lógica de digitação
  useEffect(() => {
    if (!isVisible) return;

    let timeout: NodeJS.Timeout;

    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText((prev) => prev + processedText[currentCharIndex]);
              setCurrentCharIndex((prev) => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed,
  ]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
}
