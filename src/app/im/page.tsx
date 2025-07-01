"use client";

import { useEffect } from "react";
import PageScroll from "@/components/portfolio/PageScroll";

export default function About() {
  useEffect(() => {
    const originalClass = document.body.className;

    document.body.className =
      "antialiased bg-[#111111] text-white h-screen overflow-y-hidden";

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
