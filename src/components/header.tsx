import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-card/95 backdrop-blur border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-primary transition-opacity hover:opacity-80">
            <BookOpenCheck className="h-7 w-7" />
            Course Compass
          </Link>
        </div>
      </div>
    </header>
  );
}
