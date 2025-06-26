import { getPosts } from "@/app/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

type Params = {
  params: {
    id: string;
  };
};

export default async function PostPage({ params }: Params) {
  const posts = getPosts();
  const currentIndex = posts.findIndex((p) => p.id.toString() === params.id);
  if (currentIndex === -1) {
    notFound(); // 404 페이지
  }

  const post = posts[currentIndex];

  // 같은 카테고리 글 필터링 (현재 글의 subject와 동일한 글들)
  const sameCategoryPosts = posts.filter((p) => p.subject === post.subject);

  // 현재 글의 인덱스를 같은 카테고리 글 배열에서 찾기
  const currentCategoryIndex = sameCategoryPosts.findIndex(
    (p) => p.id === post.id
  );

  const prevPost = sameCategoryPosts[currentCategoryIndex - 1];
  const nextPost = sameCategoryPosts[currentCategoryIndex + 1];

  return (
    <main className="min-h-screen p-8">
      <article className="max-w-3xl mx-auto p-8 rounded-lg shadow-md space-y-4">
        <h1 className="text-5xl font-bold text-center">{post.title}</h1>
        {post.date && (
          <p className="flex justify-end border-b border-gray-600 p-4 text-sm text-gray-400">
            {new Date(post.date).getFullYear()}.{" "}
            {new Date(post.date).getMonth() + 1}.{" "}
            {new Date(post.date).getDate()}
          </p>
        )}
        {post.content && (
          <section className="pt-6 leading-loose first-line:indent-4 whitespace-pre-line text-gray-200">
            {post.content}
          </section>
        )}
      </article>

      <nav className="max-w-3xl mx-auto mt-8 flex flex-col text-sm text-gray-400 space-y-1.5">
        {nextPost ? (
          <Link
            href={`/posts/${nextPost.id}`}
            className="hover:text-white order-1"
          >
            {nextPost.title}
          </Link>
        ) : (
          <div className="order-1" />
        )}

        <div className="font-bold text-white order-2 underline">
          {post.title}
        </div>

        {prevPost ? (
          <Link
            href={`/posts/${prevPost.id}`}
            className="hover:text-white order-3"
          >
            {prevPost.title}
          </Link>
        ) : (
          <div className="order-3" />
        )}
      </nav>
    </main>
  );
}
