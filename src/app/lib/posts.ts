import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export type Post = {
  id: number;
  title: string;
  summary: string;
  date: string;
  thumbnail?: string;
  subject: string;
  content: string; // HTML로 변환된 본문
};

// 모든 포스트 목록 불러오기 (메타데이터만, content는 빈 문자열)
export async function getPosts(): Promise<Omit<Post, "content">[]> {
  const fileNames = await fs.readdir(postsDirectory);
  const filtered = fileNames.filter((name) => /^\d+\.md$/.test(name));

  const posts = await Promise.all(
    filtered.map(async (fileName) => {
      const id = parseInt(fileName.replace(/\.md$/, ""), 10);
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

// id로 특정 포스트 불러오기 (content는 마크다운 -> HTML 변환 포함)
export async function getPostById(id: number): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
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
  } catch (error) {
    // 파일이 없거나 읽기 실패 시 null 반환
    return null;
  }
}
