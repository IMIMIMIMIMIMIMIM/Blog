import { useEffect, useState } from "react";

const Title = () => {
  const text = "who am I ?";
  const [visibleCount, setVisibleCount] = useState(0);
  const [showArrow, setShowArrow] = useState(false);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (visibleCount < text.length) {
      const timeout = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTypingDone(true);
    }
  }, [visibleCount, text.length]);

  useEffect(() => {
    if (isTypingDone) {
      const timer = setTimeout(() => {
        setShowArrow(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTypingDone]);

  return (
    <div className="h-screen relative flex justify-center items-center">
      <h1 className="text-3xl font-bold flex select-none">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-opacity duration-100 ease-out ${
              index < visibleCount ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>

      {showArrow && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Title;
