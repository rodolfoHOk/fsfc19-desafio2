import { PostsList } from '@/components/PostsList';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-500">Títulos</h2>

        <PostsList />
      </div>
    </main>
  );
}
