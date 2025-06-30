import { useState, useRef, TouchEvent, WheelEvent, useEffect } from "react";
import Title from "./Title";
import Profile from "./Profile";
import Tech from "./Tech";
import Project from "./Project";
import Finish from "./Finish";

const PageScroll = () => {
  const [section, setSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sections = [
    <Title />,
    // <Tech />,
    <Project onModalChange={setIsModalOpen} />,
    <Profile />,
    <Finish />,
  ];

  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (isScrolling || isModalOpen) return;

    // deltaY 값이 너무 작을 경우 무시 (노트북패드 문제 방지)
    if (Math.abs(event.deltaY) < 30) return;

    setIsScrolling(true);
    setSection((prev) =>
      event.deltaY > 0
        ? Math.min(prev + 1, sections.length - 1)
        : Math.max(prev - 1, 0)
    );

    setTimeout(() => {
      setIsScrolling(false);
    }, 500); // 스크롤 대기 시간 설정
  };

  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null || isScrolling || isModalOpen) return;

    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) < 50) return; // 터치 이동이 너무 작을 경우 무시

    setIsScrolling(true);
    setSection((prev) =>
      deltaY > 50
        ? Math.min(prev + 1, sections.length - 1)
        : Math.max(prev - 1, 0)
    );

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);

    touchStartY.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isScrolling || isModalOpen) return;

      if (event.key === "ArrowDown") {
        setIsScrolling(true);
        setSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else if (event.key === "ArrowUp") {
        setIsScrolling(true);
        setSection((prev) => Math.max(prev - 1, 0));
      }
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isScrolling, isModalOpen, sections.length]);

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
