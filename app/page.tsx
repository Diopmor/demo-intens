import { PostItem } from "@/components/post";
import { Post } from "@/types/post";
import Link from "next/link";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <ul className="max-w-4xl grid grid-cols-4 gap-2">
        {posts.map((post) => (
          <Link href={`/post/${post.id}`} key={post.id}>
            <PostItem post={post} key={post.id} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (response.ok) {
    const posts = await response.json();
    return posts as Post[];
  }

  return [] as Post[];
}
