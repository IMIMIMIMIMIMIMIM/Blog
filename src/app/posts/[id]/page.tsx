import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostById, getPosts } from "@/app/lib/posts";
import "../../globals.css";

type Params = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
}
export default async function PostPage(props: Params) {
  const { params } = props;
  const { id } = await params;
  const postId = parseInt(id, 10);
  const post = await getPostById(postId);

  if (!post) notFound();

  const posts = await getPosts();
  const sameCategoryPosts = posts.filter((p) => p.subject === post.subject);
  const currentIndex = sameCategoryPosts.findIndex((p) => p.id === postId);
  const prevPost = sameCategoryPosts[currentIndex - 1];
  const nextPost = sameCategoryPosts[currentIndex + 1];

  return (
    <main className="min-h-screen px-0 md:px-8 py-20">
      <article className="max-w-3xl mx-auto p-8 rounded-lg shadow-md space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          {post.title}
        </h1>
        {post.date && (
          <p className="flex justify-end border-b border-gray-600 p-4 text-xs md:text-sm text-gray-400">
            {new Date(post.date).getFullYear()}.{" "}
            {new Date(post.date).getMonth() + 1}.{" "}
            {new Date(post.date).getDate()}
          </p>
        )}
        <section
          className="prose prose-invert max-w-none pt-6 leading-loose first-line:indent-4 whitespace-pre-line text-white"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <nav className="max-w-3xl px-8 mx-auto mt-8 flex flex-col text-sm text-gray-400 space-y-1.5">
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
