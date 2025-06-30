import { useEffect, useState } from "react";

const Title = () => {
  const [text, setText] = useState("");
  const fullText =
    "대화를 좋아하고 \n상상을 현실로 만드는 것을 즐기는 편입니다.\n개발을 통해 \n사용자와의 연결고리를 만드는 것\n그리고 그 과정에서 \n끊임없이 성장해 나가는 것을 추구합니다.\n번뜩이는 아이디어와 \n재치있는 센스를 \n양껏 발휘해보겠습니다.";
  const typingSpeed = 60; // 타이핑 속도 (ms)

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen overflow-auto flex justify-center items-center pt-20">
      <h1 className="md:text-2xl font-bold text-left whitespace-pre-line md:leading-relaxed">
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
};

export default Title;
