import { useEffect, useState, useRef } from "react";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const personalRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 슬라이드 애니메이션을 트리거
          }
        });
      },
      { threshold: 0.5 }
    );

    if (personalRef.current) observer.observe(personalRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (personalRef.current) observer.unobserve(personalRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center font-cafe24 pt-20">
      <div
        ref={personalRef}
        className={`flex flex-col items-center my-2 transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-0"
            : "opacity-0 sm:translate-x-0 translate-x-[-50%] md:translate-x-[-150%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-12 text-center my-5 bg-[#111111]">
          <span className="absolute top-[-15px] left-[20%] sm:left-[20%] transform -translate-x-1/2 bg-[#111111] px-2 text-2xl">
            프로필
          </span>
          <ul className="list-disc text-center text-md md:text-xl">
            <li className="my-2 list-none">임성민</li>
            <li className="my-2 list-none">1997.11.24</li>
            <li className="my-2 list-none">010-2389-8068</li>
            <li className="my-2 list-none">ism1124@naver.com</li>
            <li className="my-2 list-none"></li>
          </ul>
        </div>
      </div>

      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-2 transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-0"
            : "opacity-0 sm:translate-x-0 translate-x-[50%] md:translate-x-[150%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-8 text-center my-5 bg-[#111111]">
          <span className="absolute top-[-15px] left-[20%] sm:left-[20%] transform -translate-x-1/2 bg-[#111111] px-2 text-2xl">
            약력
          </span>
          <ul className="list-disc text-center text-md md:text-xl">
            <li className="my-2 list-none">컴퓨터 공학과 졸업</li>
            <li className="my-2 list-none">
              플레이데이터 빅데이터 13기 부트캠프 수료
            </li>
            <li className="my-2 list-none">
              웅진 스나이퍼팩토리 React 2기 수료
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
