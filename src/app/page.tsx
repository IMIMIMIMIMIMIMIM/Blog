"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { getPosts } from "./lib/posts";
import PostCard from "@/components/PostCards";

export default function Blog() {
  const posts = getPosts();
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedSubject = searchParams.get("subject");
  const subjects = ["NEXT", "REACT", "JAVASCRIPT"];

  const filteredPosts = selectedSubject
    ? posts.filter((post) => post.subject === selectedSubject)
    : posts;

  const handleSubjectChange = (subject: string | null) => {
    const url = subject ? `/?subject=${subject}` : "/";
    router.push(url);
  };

  const subjectCounts = subjects.map((subject) => {
    const count = posts.filter((post) => post.subject === subject).length;
    return { subject, count };
  });

  return (
    <main className="flex">
      <aside className="w-40 mr-8">
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleSubjectChange(null)}
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
                onClick={() => handleSubjectChange(subject)}
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
      </aside>
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} {...post} />)
        ) : (
          <p className="text-gray-400">해당 주제의 글이 없습니다.</p>
        )}
      </section>
    </main>
  );
}
