import Link from 'next/link';
import { Post } from '@/models';
import { Scroll } from 'lucide-react';

async function getPosts(): Promise<Post[]> {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url, {
    next: {
      revalidate: 60 * 15, // 15 minutes
    },
  });
  return response.json();
}

export async function PostsList() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post) => (
        <Link
          className="flex items-center gap-2 text-neutral-50 hover:text-orange-500"
          key={post.id}
          href={`/posts/${post.id}`}
        >
          <Scroll className="text-zinc-400 hover:text-orange-700" />
          {post.title}
        </Link>
      ))}
    </div>
  );
}
