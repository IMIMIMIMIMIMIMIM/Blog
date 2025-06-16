import { getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";

interface Params {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: Params) {
  const posts = getPosts();
  const post = posts.find((p) => p.id.toString() === params.id);

  if (!post) {
    notFound(); // 404 페이지
  }

  return (
    <main className="min-h-screen bg-[#fefae0] p-8">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.summary}</p>
      </article>
    </main>
  );
}
