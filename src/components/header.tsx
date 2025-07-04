'use client';

import { Menu, Youtube } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Mind Maps', href: '/mind-maps' },
  { label: 'Short Notes', href: '/short-notes' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function Header() {
  const pathname = usePathname();

  const MobileNav = () => (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
               <SheetClose asChild>
                 <Link href="/" className="text-lg font-bold">
                    Next Toppers
                  </Link>
               </SheetClose>
            </div>
            <nav className="flex-grow p-4 space-y-2">
              {navItems.map((item) => (
                 <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block p-3 text-base font-medium rounded-md hover:bg-muted",
                      pathname === item.href && "bg-muted text-primary"
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
             <div className="p-4 border-t space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Switch Theme</span>
                    <ThemeToggle />
                </div>
               <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10"
                >
                  <Youtube className="w-5 h-5" />
                  Go to YouTube
                </a>
             </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
             <MobileNav />
             <Link
                href="/"
                className="text-2xl font-bold font-headline text-foreground transition-opacity hover:opacity-80"
              >
                Next Toppers
              </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-0 text-sm font-medium transition-colors rounded-md whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90 h-8 w-12"
            >
              <Youtube className="w-6 h-6" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
