import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FC Blog',
  description: 'Blog do desafio 2 da imersão 19',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-zinc-950`}>
        <div className="min-h-screen flex flex-col justify-between">
          <div className="flex flex-col">
            <Navbar />

            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
