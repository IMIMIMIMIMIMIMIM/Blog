import Blog from "@/components/Blog";
import { getPosts } from "./lib/posts";

export default async function Page() {
  const posts = await getPosts();

  return <Blog posts={posts} />;
}
