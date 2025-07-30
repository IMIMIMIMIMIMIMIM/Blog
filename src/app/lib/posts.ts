import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  id: number;
  title: string;
  summary: string;
  date: string;
  thumbnail?: string;
  subject: string;
  content: string;
};

export async function getPosts(): Promise<Omit<Post, "content">[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const filtered = fileNames.filter((name) => /^\d+\.mdx$/.test(name));

  const posts = await Promise.all(
    filtered.map(async (fileName) => {
      const id = parseInt(fileName.replace(/\.mdx$/, ""), 10);
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id,
        title: data.title,
        summary: data.summary,
        date: data.date,
        thumbnail: data.thumbnail,
        subject: data.subject ?? "",
      };
    })
  );

  return posts.sort((a, b) => a.id - b.id);
}

export async function getPostById(id: number): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
      .use(remarkGfm) // GitHub-flavored markdown
      .use(remarkRehype) // remark -> rehype
      .use(rehypeHighlight) // 코드 하이라이트 적용
      .use(rehypeStringify) // rehype -> HTML 문자열
      .process(content);

    const contentHtml = processedContent.toString();

    return {
      id,
      title: data.title,
      summary: data.summary,
      date: data.date,
      thumbnail: data.thumbnail,
      subject: data.subject ?? "",
      content: contentHtml,
    };
  } catch {
    return null;
  }
}
