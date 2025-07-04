import { useEffect, useState, useRef } from "react";
import {
  firebase,
  github,
  html,
  javascript,
  next,
  notion,
  prettier,
  react,
  reacthookform,
  reactrouter,
  slack,
  styledcomponent,
  tailwindcss,
  typescript,
  vanillaextract,
  vite,
  zustand,
} from "./assets";

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const personalRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const personalCurrent = personalRef.current;
    const experienceCurrent = experienceRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (personalCurrent) observer.observe(personalCurrent);
    if (experienceCurrent) observer.observe(experienceCurrent);

    return () => {
      if (personalCurrent) observer.unobserve(personalCurrent);
      if (experienceCurrent) observer.unobserve(experienceCurrent);
    };
  }, []);

  useEffect(() => {
    const personalCurrent = personalRef.current;
    const experienceCurrent = experienceRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (personalCurrent) observer.observe(personalCurrent);
    if (experienceCurrent) observer.observe(experienceCurrent);

    return () => {
      if (personalCurrent) observer.unobserve(personalCurrent);
      if (experienceCurrent) observer.unobserve(experienceCurrent);
    };
  }, []);

  return (
    <div className="h-screen mt-20 flex flex-col justify-center items-center ">
      <div
        ref={personalRef}
        className={`flex flex-col items-center my-2 md:mb-[-30px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-5 md:p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[30%] transform -translate-x-1/2 bg-[#111111]  px-2 text-xl">
            Frontend
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={react}
                alt="React"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={typescript}
                alt="TypeScript"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={next}
                alt="next"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={javascript}
                alt="JavaScript"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={html}
                alt="HTML"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={reactrouter}
                alt="Reactrouterreactrouter"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-2 md:my-[-20px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[100%] md:translate-x-[200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-5 md:p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[15%] transform -translate-x-1/2 bg-[#111111]  px-2 text-xl">
            Css
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={styledcomponent}
                alt="Styledcomponent"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={tailwindcss}
                alt="Tailwindcss"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={vanillaextract}
                alt="Vanillaextract"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={personalRef}
        className={`flex flex-col items-center my-2 md:mb-[-20px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-90%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-5 md:p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[45%] transform -translate-x-1/2 bg-[#111111]  px-2 text-xl">
            State&Data
          </span>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={zustand}
                alt="Zustand"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={firebase}
                alt="Firebase"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-2 md:mt-[-30px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[100%] md:translate-x-[200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-5 md:p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[15%] transform -translate-x-1/2 bg-[#111111]  px-2 text-xl">
            ETC
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={vite}
                alt="Vite"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={prettier}
                alt="Prettier"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={github}
                alt="Github"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={notion}
                alt="Notion"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
            <div className="flex justify-center items-center bg-white rounded-md scale-110">
              <img
                src={slack}
                alt="Slack"
                className="h-8 w-8 md:h-16 md:w-16 rounded-md scale-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
