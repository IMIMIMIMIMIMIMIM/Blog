import PostCard from "@/components/PostCards";

export default function Home() {
  const posts = [
    { id: 1, title: "글1", summary: "첫번째 등록 글" },
    { id: 2, title: "글2", summary: "두번째 등록 글" },
    { id: 3, title: "글3", summary: "세번째 등록 글" },
    { id: 4, title: "글4", summary: "네번째 등록 글" },
  ];
  return (
    <main className="min-h-screen bg-[#fefae0] p-8 flex flex-col">
      <div className="flex flex-1">
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                summary={post.summary}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
