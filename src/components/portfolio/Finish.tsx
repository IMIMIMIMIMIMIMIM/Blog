import { useEffect, useRef, useState } from "react";

const Finish = () => {
  const words = ["make", "Difference"];
  const [visibleWords, setVisibleWords] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || visibleWords >= words.length + 1) return;

    const timeout = setTimeout(() => {
      setVisibleWords((prev) => prev + 1);
    }, 800);

    return () => clearTimeout(timeout);
  }, [visibleWords, isVisible]);

  return (
    <div
      ref={sectionRef}
      className="w-screen h-screen flex flex-col items-center justify-center relative"
    >
      <h1 className="text-3xl md:text-6xl font-bold flex gap-3">
        {words.map((word, index) => (
          <span
            key={index}
            className={`transition-opacity duration-700 ${
              index < visibleWords ? "opacity-100" : "opacity-0"
            }`}
          >
            {word}
          </span>
        ))}
      </h1>
      <p
        className={`absolute bottom-4 right-4 text-xs text-gray-400 transition-opacity duration-700 ${
          visibleWords > words.length ? "opacity-100" : "opacity-0"
        }`}
      >
        man's dreams never end
      </p>
    </div>
  );
};

export default Finish;
