import Link from "next/link";

import { Photo } from "./generateStaticParams";

export default function Show({ posts }: { posts: Photo[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/grape/${post.title}`} style={{ color: "white" }}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
