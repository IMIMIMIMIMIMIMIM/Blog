const Intro = () => {
  return (
    <div className="relative flex flex-col items-end mt-20 border-4 border-gray-400 rounded-lg font-chosun mx-4 sm:mx-0">
      <span className="absolute top-[-15px] left-[20%] sm:left-[15%] transform -translate-x-1/2 text-white bg-[#111111] font-bold font-cafe24 px-2 text-2xl">
        I'm
      </span>
      <p className="text-xl my-4">대화를 좋아하고,</p>
      <p className="text-xl my-4">상상을 현실로 만드는 것을 즐기는 편입니다.</p>

      <p className="text-xl my-4">
        개발을 통해 사용자와의 연결고리를 만드는 것,
      </p>
      <p className="text-xl my-4">
        그리고 그 과정에서 끊임없이 성장해 나가는 것을 추구합니다.
      </p>
      <p className="text-xl my-4">
        번뜩이는 아이디어와 재치있는 센스를 양껏 발휘해보겠습니다.
      </p>
      <p className="items-end text-xl my-4">감사합니다.</p>
    </div>
  );
};

export default Intro;
