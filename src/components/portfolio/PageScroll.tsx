import { useState, useRef, TouchEvent, WheelEvent, useEffect } from "react";
import Title from "./Title";
import Profile from "./Profile";
import Tech from "./Tech";
import Project from "./Project";
import Finish from "./Finish";
import Intro from "./Intro";

const PageScroll = () => {
  const [section, setSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollLockRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  const sections = [
    <Title />,
    <Intro />,
    <Tech />,
    <Project onModalChange={setIsModalOpen} />,
    <Profile />,
    <Finish />,
  ];

  const scrollToSection = (nextSection: number) => {
    if (scrollLockRef.current || isModalOpen) return;
    scrollLockRef.current = true;

    setSection((prev) => {
      const newSection = Math.max(
        0,
        Math.min(nextSection, sections.length - 1)
      );
      return newSection;
    });

    setTimeout(() => {
      scrollLockRef.current = false;
    }, 700);
  };

  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaY) < 30) return;
    scrollToSection(section + (event.deltaY > 0 ? 1 : -1));
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null) return;
    const deltaY = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(deltaY) < 50) return;
    scrollToSection(section + (deltaY > 0 ? 1 : -1));
    touchStartY.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (scrollLockRef.current || isModalOpen) return;

      if (event.key === "ArrowDown") {
        scrollToSection(section + 1);
      } else if (event.key === "ArrowUp") {
        scrollToSection(section - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [section, isModalOpen]);

  return (
    <div
      className="overflow-hidden h-screen"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="transition-transform duration-700"
        style={{ transform: `translateY(-${section * 100}vh)` }}
      >
        {sections.map((Section, index) => (
          <div
            key={index}
            className="h-screen flex justify-center items-center"
          >
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageScroll;
