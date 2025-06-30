// app/about/page.tsx
"use client";

import { useEffect } from "react";
import PageScroll from "@/components/portfolio/PageScroll";

export default function About() {
  useEffect(() => {
    const originalClass = document.body.className;

    // 페이지 진입 시 body 클래스를 덮어씀
    document.body.className =
      "antialiased bg-[#111111] text-white h-screen overflow-hidden";

    // 페이지 이탈 시 원래대로 복원
    return () => {
      document.body.className = originalClass;
    };
  }, []);

  return (
    <div className="h-full flex item-middle">
      <PageScroll />
    </div>
  );
}
