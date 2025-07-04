'use client';

import { BookOpenCheck, Menu, Send } from 'lucide-react';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { SessionTimer } from './SessionTimer';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Mind Maps', href: '/mind-maps' },
  { label: 'Short Notes', href: '/short-notes' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function Header() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-muted-foreground transition-colors hover:text-primary',
            pathname === item.href && 'text-primary'
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  const MobileNav = () => (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
               <SheetClose asChild>
                 <Link href="/" className="flex items-center gap-2 text-lg font-bold text-primary">
                    <BookOpenCheck className="h-6 w-6" />
                    Course Compass
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
             <div className="p-4 border-t">
               <a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10"
                >
                  <Send className="w-4 h-4" />
                  Join Telegram
                </a>
             </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  return (
    <header className="bg-card/95 backdrop-blur border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold font-headline text-primary transition-opacity hover:opacity-80"
          >
            <BookOpenCheck className="h-7 w-7" />
            Course Compass
          </Link>
          
          <div className="flex items-center gap-4">
            <DesktopNav />
            {isAuthenticated && (
              <div className="hidden lg:block">
                <SessionTimer />
              </div>
            )}
            <div className="hidden md:block">
               <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10"
              >
                <Send className="w-4 h-4" />
                Join Telegram
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
