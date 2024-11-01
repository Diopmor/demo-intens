import { Post } from "@/types/post";

export default async function PostPage(props: PostProps) {
  const { postId } = await props.params;
  const post = await getPostItem(postId);
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl capitalize font-medium">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

interface PostProps {
  params: Promise<{
    postId: string;
  }>;
}

async function getPostItem(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post as Post;
}
