import { useEffect, useRef, useState } from "react";

const fullText =
  "대화를 좋아하고 \n상상을 현실로 만드는 것을 즐기는 편입니다.\n개발을 통해 \n사용자와의 연결고리를 만드는 것\n그리고 그 과정에서 \n끊임없이 성장해 나가는 것을 추구합니다.\n번뜩이는 아이디어와 \n재치있는 센스를 \n양껏 발휘해보겠습니다. ";
const typingSpeed = 70;

const Intro = () => {
  const [text, setText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !intervalIdRef.current) {
          let index = 0;
          intervalIdRef.current = setInterval(() => {
            setText(() => {
              const next = fullText.slice(0, index + 1);
              if (index >= fullText.length - 1) {
                if (intervalIdRef.current) clearInterval(intervalIdRef.current);
                setIsTypingDone(true);
              }
              index++;
              return next;
            });
          }, typingSpeed);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-auto flex justify-center items-center pt-20"
    >
      <h1 className="md:text-2xl font-bold text-left whitespace-pre-line md:leading-relaxed">
        {text}
        <span className={`${isTypingDone ? "animate-blink" : "inline"}`}>
          |
        </span>
      </h1>
    </div>
  );
};

export default Intro;
