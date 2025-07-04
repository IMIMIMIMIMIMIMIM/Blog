import Blog from "@/components/Blog";
import { getPosts } from "./lib/posts";
import { Suspense } from "react";

export default async function Page() {
  const posts = await getPosts();

  return (
    <Suspense>
      <Blog posts={posts} />;
    </Suspense>
  );
}
