'use client';

import { Menu } from 'lucide-react';
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
import { SessionTimer } from './SessionTimer';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Practice Sheets', href: '/mind-maps' },
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
                    NIMCET 2026
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
                <div className="w-full">
                  <SessionTimer />
                </div>
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
          <div className="flex items-center gap-6">
            <MobileNav />
            <Link
              href="/"
              className="text-2xl font-bold font-headline text-foreground transition-opacity hover:opacity-80"
            >
              NIMCET 2026
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={cn(
                    "transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex">
                <SessionTimer />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
