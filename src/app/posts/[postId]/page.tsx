import { Post } from '@/models';
import { Bookmark } from 'lucide-react';

async function getPost(id: number): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url, {
    next: {
      revalidate: 60 * 60 * 1, // 1 hour
    },
  });
  return response.json();
}

export default async function PostPage({
  params,
}: {
  params: { postId: number };
}) {
  const { postId } = await params;
  const post = await getPost(postId);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-row items-center justify-between">
          <h2 className="font-bold text-2xl text-orange-500">{post.title}</h2>

          <Bookmark className="font-bold text-2xl text-orange-500 hover:fill-orange-500 transition-all" />
        </div>

        <section className="text-lg text-zinc-50">{post.body}</section>
      </div>
    </main>
  );
}
