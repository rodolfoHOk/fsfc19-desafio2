import Link from 'next/link';
import { Notebook, User } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  return (
    <header className="h-48 bg-transparent mb-8">
      <div className="w-full h-48 flex">
        <Image
          className="object-cover object-[50%_65%]"
          width={1920}
          height={1080}
          src="/images/banner.jpg"
          alt="banner"
        />
      </div>

      <div className="mx-16 h-16 px-4 py-2 -translate-y-1/2 flex items-center justify-between">
        <div className="flex items-center bg-zinc-700 px-4 py-2 rounded-md">
          <Link
            href="/"
            className="flex flex-row items-center gap-4 text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors"
          >
            <Notebook />
            FC Blog
          </Link>
        </div>

        <div className="flex items-center bg-zinc-700 px-4 py-2 rounded-md">
          <a
            className="text-orange-500 hover:text-orange-600  transition-colors"
            href="#"
          >
            <User />
          </a>
        </div>
      </div>
    </header>
  );
}
