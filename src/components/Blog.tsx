"use client";

import { useSearchParams, useRouter } from "next/navigation";
import PostCard from "./PostCards";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
  summary: string;
  date: string;
  thumbnail?: string;
  subject: string;
  content?: string;
};

type BlogClientProps = {
  posts: Post[];
};

export default function Blog({ posts }: BlogClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedSubject = searchParams.get("subject");
  const subjects = ["NEXT", "REACT", "JAVASCRIPT", "ETC"];
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredPosts = selectedSubject
    ? posts.filter((post) => post.subject === selectedSubject)
    : posts;

  const sortedPosts = filteredPosts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleSubjectChange = (subject: string | null) => {
    const url = subject ? `/?subject=${subject}` : "/";
    router.push(url);
  };

  const subjectCounts = subjects.map((subject) => {
    const count = posts.filter((post) => post.subject === subject).length;
    return { subject, count };
  });

  return (
    <main className="flex pt-20">
      <aside
        className={`w-50 fixed md:border-r-1 border-gray-300 px-4 py-8 h-full
        transform transition-transform duration-300 ease-in-out
           md:translate-x-0 bg-[#111111]
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
    z-20
  `}
      >
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => {
                handleSubjectChange(null);
                setMenuOpen(false);
              }}
              className={`text-left w-full ${
                !selectedSubject
                  ? "text-yellow-400 font-bold"
                  : "text-white hover:text-yellow-300"
              } cursor-pointer`}
            >
              전체 보기 ({posts.length})
            </button>
          </li>

          {subjectCounts.map(({ subject, count }) => (
            <li key={subject}>
              <button
                onClick={() => {
                  handleSubjectChange(subject);
                  setMenuOpen(false);
                }}
                className={`text-left w-full ${
                  selectedSubject === subject
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-300"
                } cursor-pointer`}
              >
                {subject} ({count})
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          className="md:hidden bg-[#111111] block absolute -right-14 top-0 z-50 p-4 border-b border-r border-gray-300 rounded-br-md"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </aside>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-10 md:hidden"
        ></div>
      )}

      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-0 md:ml-60 px-4 py-10 md:p-4">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => <PostCard key={post.id} {...post} />)
        ) : (
          <p className="text-gray-400 text-center">
            해당 주제의 글이 없습니다.
          </p>
        )}
      </section>
    </main>
  );
}
