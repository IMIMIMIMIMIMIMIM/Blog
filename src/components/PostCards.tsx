import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  id: number;
  title: string;
  summary: string;
  date: string;
  thumbnail?: string;
};

export default function PostCard({
  id,
  title,
  summary,
  date,
  thumbnail,
}: PostCardProps) {
  return (
    <Link href={`/posts/${id}`} aria-label={`Read more about ${title}`}>
      <article
        className="cursor-pointer bg-[#ffffff0a] rounded-xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out
    transform opacity-0 translate-y-4 animate-fade-up flex flex-col h-full"
      >
        {thumbnail && (
          <div className="mb-4 relative w-full h-48 rounded-t-xl overflow-hidden">
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              fill
              style={{ objectFit: "cover" }}
              priority={true}
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">{title}</h3>
          <p className="mb-2 flex-1">{summary}</p>
          <p className="text-xs text-right">
            {date && (
              <span>
                {new Date(date).getFullYear()}. {new Date(date).getMonth() + 1}.{" "}
                {new Date(date).getDate()}
              </span>
            )}
          </p>
        </div>
      </article>
    </Link>
  );
}
