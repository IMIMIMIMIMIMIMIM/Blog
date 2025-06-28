import BlogClient from "@/components/BlogClient";
import { getPosts } from "./lib/posts";

export default async function Page() {
  const posts = await getPosts();

  return <BlogClient posts={posts} />;
}
