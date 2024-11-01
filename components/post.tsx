import { Post } from "@/types/post";
import Image from "next/image";

export function PostItem({ post }: { post: Post }) {
  return (
    <li
      key={post.id}
      className="shadow-2 px-4 py-3 hover:bg-blue-100 rounded-xl transition duration-200"
    >
      <Image
        src="https://fakeimg.pl/350x200/ff0000,128/000,255"
        alt="post image"
        width={350}
        height={200}
        className="rounded-xl w-full aspect-square object-cover"
      />
      <h2 className="text-large line-clamp-2  capitalize">{post.title}</h2>
    </li>
  );
}
