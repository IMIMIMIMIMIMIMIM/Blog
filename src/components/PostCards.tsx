import Link from "next/link";

interface PostCardProps {
  id: number;
  title: string;
  summary: string;
  date?: string;
}

export default function PostCard({ id, title, summary, date }: PostCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <article
        className="cursor-pointer p-6 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow"
        title={title}
      >
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-800">{summary}</p>
        <p className="text-gray-600 text-sm mb-2">
          {date && <span>📅 {new Date(date).toLocaleDateString()}</span>}
        </p>
      </article>
    </Link>
  );
}
