import { useEffect, useRef, useState } from "react";
import {
  im,
  IMsc1,
  IMsc2,
  lotto,
  lottosc,
  murder,
  murdersc,
  perfitt,
  perfittsc1,
  perfittsc2,
  tfa,
  tfasc,
} from "./assets";

type ProjectTypes = {
  name: string;
  desc: string;
  stack: string;
  part?: string;
  url: string;
  date: string;
  people: string;
  link?: string;
  image: string;
  screenshot?: string[];
};

const Project = ({
  onModalChange,
}: {
  onModalChange: (isOpen: boolean) => void;
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectTypes | null>(
    null
  );
  const [modalPage, setModalPage] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const projects: ProjectTypes[] = [
    {
      name: "Perfitt-size",
      desc: "발 사이즈를 측정하고 신발을 추천해주는 앱",
      stack:
        "React, Typescript, Vite, Vanilla-extract, Firebase, Zustand, React-router",
      part: "온보딩ui, 신발장, 토스트 메시지, 프로필 이미지, 렌더링 및 SEO 최적화",
      url: "https://github.com/Perfitt-11-supreme/11-supreme",
      date: "24-09-02 ~ 24-09-27",
      people: "5",
      link: "https://11-supreme.vercel.app",
      image: perfitt,
      screenshot: [perfittsc1, perfittsc2],
    },

    {
      name: "TFA",
      desc: "여행경로 추천 및 여행 플랜을 만들어주는 사이트",
      stack: "React, Typescript, Styled-components, React-router",
      part: "메인페이지, 마이페이지, 로그인, 회원가입, 비밀번호 변경, 추천페이지, 게시판 상세페이지",
      url: "https://github.com/Trip-Full-Accel/tfa-FE",
      date: "22-12-01 ~ 22-12-30",
      people: "6 (back: 4, front: 2)",
      image: tfa,
      screenshot: [tfasc],
    },
    {
      name: "Portfolio",
      desc: "포트폴리오. 근데 이제 다크모드, 풀 페이지 스크롤, 반응형을 곁들인",
      stack: "React, Typescript, Vite, TailwindCss",
      url: "https://github.com/IMIMIMIMIMIMIMIM/Portfolio-IM",
      date: "24-10-08 ~ 24-10-17",
      people: "1",
      link: "https://imimimimimimimim.github.io/Portfolio-IM/",
      image: im,
      screenshot: [IMsc1, IMsc2],
    },
    {
      name: "Findmurder",
      desc: "추리를 통하여 범인을 추적하는 게임",
      stack: "React, Javascript, Styled-components, React-Router",
      url: "https://github.com/IMIMIMIMIMIMIMIM/find-murder",
      date: "23-01-04 ~ 23-02-11",
      people: "1",
      link: "https://imimimimimimimim.github.io/find-murder/",
      image: murder,
      screenshot: [murdersc],
    },
    {
      name: "Lotto",
      desc: "로또 번호 생성 및 분석을 도와주는 앱",
      stack: "React, Typescript, Styled-components",
      url: "https://github.com/IMIMIMIMIMIMIMIM/lotto",
      date: "23-06-08 ~ 23-07-21",
      people: "1",
      link: "https://imimimimimimimim.github.io/lotto/",
      image: lotto,
      screenshot: [lottosc],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, index]);
            }, index * 250);
          });
        }
      },
      { threshold: 0.3 }
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

  const handleOpenModal = (project: ProjectTypes) => {
    setSelectedProject(project);
    onModalChange(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    onModalChange(false);
    setModalPage(0);
  };

  return (
    <div
      ref={containerRef}
      className="flex mt-20 justify-center items-center h-screen relative "
    >
      <div className="grid grid-cols-2 justify-items-center md:grid-cols-5 gap-4 w-screen md:h-2/3 p-6">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={`col-span-1 flex  items-center p-4 border-2 rounded-lg 
                      bg-white border-gray-400 cursor-pointer aspect-square xl:aspect-auto
                        transform transition-all duration-700 ease-in-out
                      ${
                        visibleIndexes.includes(index)
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-10"
                      }
                    `}
            onClick={() => handleOpenModal(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain rounded-lg scale-90"
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-[#111111] dark:bg-gray-800 rounded-lg p-6 relative w-4/5 h-4/5 md:w-2/3 md:h-3/4 text-xs md:text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl mb-4">{selectedProject.name}</h2>
            <div className="flex flex-col xl:flex-row gap-4 h-full overflow-auto">
              <div className="md:leading-6 w-full h-1/3 xl:w-1/2 space-y-2">
                <p>{selectedProject.desc}</p>
                <p>사용 기술: {selectedProject.stack}</p>
                <p>개발 기간: {selectedProject.date}</p>
                <p>인원: {selectedProject.people}</p>
                {selectedProject.part && <p>파트: {selectedProject.part}</p>}
              </div>

              <div className="w-full xl:w-1/2 flex justify-around items-center xl:items-start overflow-auto h-1/2 xl:h-full max-h-[60vh]">
                {selectedProject.screenshot?.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${selectedProject.name} 스크린샷 ${index + 1}`}
                    className=" object-contain max-h-[200px] xl:max-h-[60vh] border rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="absolute bottom-1 right-4 gap-4 flex">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Link
                  </a>
                )}
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Code
                </a>
              </div>
            </div>

            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-3 text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
